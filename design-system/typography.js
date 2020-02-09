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
  return (
    p.font &&
    css`
      font-family: ${val};
    `
  );
};

export const font = p => p.theme.makeResponsive(p, _font);

export const pageFont = p => css`
  font-family: ${p.theme.fonts.primary};
`;
