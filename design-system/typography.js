import styled, { css } from "styled-components";

const _align = p => {
  const alignment =
    p.align &&
    css`
      text-align: ${p.align};
    `;
  return [alignment];
};

export const align = p => p.theme.makeResponsive(p, _align);

const _font = p => {
  const val = p.theme.fonts[p.font] || p.theme.fonts.primary;
  const fontFam =
    p.font &&
    css`
      font-family: ${val};
    `;
  const fontColor =
    p.fontColor &&
    css`
      color: ${p.theme.colors[p.fontColor] || p.fontColor};
    `;

  const weight =
    p.bold &&
    css`
      font-weight: ${p.theme.fontWeights.bold};
    `;
  return [fontFam, fontColor, weight];
};

export const font = p => p.theme.makeResponsive(p, _font);

export const pageFont = p => css`
  font-family: ${p.theme.fonts.primary};
`;
