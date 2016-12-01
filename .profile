#
export PATH=/usr/local/bin:/usr/local/sbin:/sbin:/bin:/usr/sbin:/usr/bin:$PATH

# Alias definitions
if [ -f ~/.aliases ]; then
    . ~/.aliases
fi

BLOCKSIZE=K; export BLOCKSIZE
EDITOR='code -w';  export EDITOR
PAGER='less -R';  export PAGER

if [ -f `brew --prefix`/etc/bash_completion ]; then
  . `brew --prefix`/etc/bash_completion
fi

PS1='\[\033[01;32m\]\h\[\033[00m\]:$(__git_ps1) \[\033[01;34m\]\w\[\033[00m\] \$ '

export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad
export LC_CTYPE=en_US.UTF-8
export LANG="en_US.UTF-8"
export GREP_OPTIONS='--color=always'
