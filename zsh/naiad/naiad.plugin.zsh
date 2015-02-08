NAIAD_LOCAL=true
DEVEL_SERVER_FILE=~/.naiad/.devel
PROXY_CONFIG_URL=$(cat ~/.naiad/.proxy)

export NAIAD_LOCAL
echo $NAIAD_LOCAL > ~/.naiad/.local

if [ -f ~/.naiad/.servers ]; then
  source ~/.naiad/.servers
fi

# Functions
getnaiad()
{
  if [ -f ~/.naiad/.devel ]; then
    NAIAD_DEVEL=$(cat $DEVEL_SERVER_FILE)
    export NAIAD_DEVEL
  fi
}

setnaiad()
{
  if [ $1 ]; then
    echo $1 > $DEVEL_SERVER_FILE
    getnaiad
  fi
}

getdir()
{
  if $NAIAD_LOCAL; then
    NAIAD_DIRECTORY=`/bin/pwd -P | sed -e "s|$HOME|~|"`
  else
    NAIAD_DIRECTORY=`/bin/pwd | sed -e "s|$HOME|~|"`
  fi
  export NAIAD_DIRECTORY
}

getenv()
{
  getdir
  getnaiad
}

devel()
{
  getenv
  ssh -At $NAIAD_DEVEL "cd -P $NAIAD_DIRECTORY; bash"
}

use()
{
  currenttds=$NAIAD_DEVEL
  if [ $1 ]; then
    server=$1
  else
    server=$web
  fi

  # If this looks like a domain, use the raw input,
  # else assume it's a subdomain and append our domain.
  if [[ $server =~ .+[\.].* ]]; then
    setnaiad $server
  else
    # Check if this is an alias or an actual TDS name.
    if [ "${(P)server}" = "" ]; then
      subdomain=$server
    else
      subdomain=${(P)server}
    fi

    setnaiad ${subdomain}.${domain}
  fi

  backend=${NAIAD_DEVEL//\.*/}

  curl --data "backend=$backend&change=1" $PROXY_CONFIG_URL

  # If the curl failed, display an alert.
  if [ $? -ne 0 ]; then
    echo "Failed to set new TDS. Resetting to ${currenttds}."
    setnaiad $currenttds
  else
    echo "Switching to $NAIAD_DEVEL"
  fi
}

getenv
