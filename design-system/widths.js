import styled, { css } from "styled-components";

const _widths = p => {
  const maxWidth =
    p.maxWidth &&
    css`
      max-width: ${p.maxWidth}px;
    `;
  return [maxWidth];
};

export const widths = p => p.theme.makeResponsive(p, _widths);
