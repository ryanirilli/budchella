import styled, { css } from "styled-components";

const _background = p =>
  p.bgColor &&
  css`
    background-color: ${p.theme.colors[p.bgColor] || p.bgColor};
  `;

export const background = p => p.theme.makeResponsive(p, _background);
