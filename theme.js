import { css } from "styled-components";

const BASE_UNIT = 4;
const spacing = {
  xxs: BASE_UNIT / 2, // 2
  xs: BASE_UNIT, // 4
  s: BASE_UNIT * 2, // 8
  m: BASE_UNIT * 4, // 16
  m2: BASE_UNIT * 5, // 20
  m3: BASE_UNIT * 6, // 24
  l: BASE_UNIT * 8, // 32
  xl: BASE_UNIT * 16, // 64
  xxl: BASE_UNIT * 32, // 128
  xxxl: BASE_UNIT * 64 // 256
};

// major third type scale, base font 16px
const fontSizes = {
  xxxs: "0.512rem",
  xxs: "0.64rem",
  xs: "0.8rem",
  s: "1rem",
  m: "1.25rem",
  l: "1.563rem",
  xl: "1.953rem",
  xxl: "2.441rem",
  xxxl: "3.052rem"
};

const fonts = {
  primary: `"Montserrat", sans-serif`
};

const fontWeights = {
  normal: 100,
  semiBold: 600,
  bold: 800
};

const containerWidths = {
  xs: 64,
  s: 128,
  m: 256,
  l: 512,
  l2: 652,
  xl: 800,
  xxl: 1200
};

const zIndices = {
  bottom: 0,
  layer1: 1,
  layer2: 2,
  layer3: 3,
  layer4: 4,
  top: 2147483647
};

const breakpoints = {
  s: 0,
  m: 320,
  l: 768,
  xl: 1024,
  xxl: 1920
};

const main = "#c4c4c4";
const white = "#ffffff";
const gray000 = "#f7f7f7";
const gray050 = "#ecebeb";
const gray100 = "#d6cecb";
const gray150 = "#bbb4b2";
const gray200 = "#9e9896";
const gray300 = "#847f7d";
const gray400 = "#484746";
const gray500 = "#4c4948";
const gray600 = "#312f2f";
const black = "#000000";

const colors = {
  main,
  white,
  gray000,
  gray050,
  gray100,
  gray150,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  black
};

const shadows = {
  main: "rgba(25, 43, 97, 0.07) 0px 0px 25px;"
};

export default {
  colors,
  spacing,
  containerWidths,
  zIndices,
  fonts,
  fontSizes,
  fontWeights,
  shadows,
  media(clampQuery = false, useMaxWidth = false) {
    const labels = Object.keys(breakpoints);
    return labels.reduce((acc, label, index) => {
      let maxQuery = "";
      const max = breakpoints[labels[index + 1]];
      if (max && clampQuery) {
        maxQuery = `and (max-width: ${(max - 1) / 16}em)`;
      }
      acc[label] = (...args) => css`
        @media (${useMaxWidth ? "max" : "min"}-width: ${breakpoints[label] /
        16}em) ${maxQuery} {
          ${css(...args)}
        }
      `;
      return acc;
    }, {});
  },
  makeResponsive(props, styles) {
    const responsiveStyles = [styles(props, props.theme)];
    Object.keys(breakpoints).forEach(breakpoint => {
      const bpProps = props[breakpoint];
      if (bpProps) {
        const extendedProps = { ...props, ...bpProps };
        const bp = this.media()[breakpoint];
        responsiveStyles.push(bp`${styles(extendedProps)}`);
      }
    });
    return responsiveStyles.flat();
  }
};
