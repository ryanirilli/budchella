import styled, { css } from "styled-components";

const _grid = p => {
  const main =
    p.grid &&
    css`
      display: grid;
    `;
  const cols =
    p.cols &&
    css`
      grid-template-columns: ${p.cols};
    `;
  const colSpacing =
    p.colSpacing &&
    css`
      grid-column-gap: ${p.theme.spacing[p.colSpacing] || p.colSpacing}px;
    `;
  const gridRow =
    p.gridRow &&
    css`
      grid-row: ${p.gridRow};
    `;
  return [main, cols, colSpacing, gridRow];
};

export const grid = p => p.theme.makeResponsive(p, _grid);
