module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Monaco, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'UNDERLINE',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    windowSize: '[120, 40]',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {
      EDITOR: 'vim'
    },

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperterm-material',
    'hyperlinks',
    'hyperterm-tab-icons'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
