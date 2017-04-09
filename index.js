// Syntax scheme
const backgroundColor   = '#0F1C21';
const foregroundColor   = '#80B6AD';
const cursorColor       = '#80B6AD';
const borderColor       = '#12232A';
const colors            = {
      black             : backgroundColor,
      red               : '#046655',
      green             : '#04C975',
      yellow            : '#B5BD68',
      blue              : '#3F5E61',
      magenta           : '#94A5BC',
      cyan              : '#8ABEB7',
      white             : foregroundColor,
      lightBlack        : '#434A58',
      lightRed          : '#046655',
      lightGreen        : '#04C975',
      lightYellow       : '#B5BD68',
      lightBlue         : '#81A2BE',
      lightMagenta      : '#94A5BC',
      lightCyan         : '#8ABEB7',
      lightWhite        : foregroundColor
};

// Config
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        colors,
        cursorColor: config.cursorColor || cursorColor,
        cursorShape: config.cursorShape || 'BEAM',
        fontSize: config.fontSize || 12,
        fontFamily: config.fontFamily || '"Fira Code"',
        termCSS: `
            ${config.termCSS || ''}
            ::selection {
                background: rgba(130, 143, 148, 1) !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial;
            }
            span {
                font-weight: normal !important;
            }
        `,
        css: `
            ${config.css || ''}
            ::selection {
                background: rgba(130, 143, 148, 1) !important;
            }
        `
    });
};
