module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Monaco, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#9e70c2',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'UNDERLINE',

    // color of the text
    foregroundColor: '#f1f1f1',

    // terminal background color
    backgroundColor: 'rgba(21,23,24,0.8)',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    windowSize: '[120, 40]',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#414141',
      red: '#cf3d41',
      green: '#9ecb4d',
      yellow: '#e7ce61',
      blue: '#51b4dd',
      magenta: '#9e70c2',
      cyan: '#00ffff',
      white: '#f1f1f1',
      lightBlack: '#414141',
      lightRed: '#cf3d41',
      lightGreen: '#9ecb4d',
      lightYellow: '#e7ce61',
      lightBlue: '#51b4dd',
      lightMagenta: '#cc00ff',
      lightCyan: '#9ecb4d',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

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
  plugins: [],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
