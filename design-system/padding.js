import styled, { css } from "styled-components";

const _padding = p => {
  const getVal = val =>
    p.theme.spacing[val] ? `${p.theme.spacing[val]}px` : `${val}px`;
  const sides =
    p.paddingSides &&
    css`
      padding-left: ${getVal(p.paddingSides)};
      padding-right: ${getVal(p.paddingSides)};
    `;
  const ends =
    p.paddingEnds &&
    css`
      padding-top: ${getVal(p.paddingEnds)};
      padding-bottom: ${getVal(p.paddingEnds)};
    `;
  const top =
    p.paddingTop &&
    css`
      padding-top: ${getVal(p.paddingTop)};
    `;
  const right =
    p.paddingRight &&
    css`
      padding-right: ${getVal(p.paddingRight)};
    `;
  const bottom =
    p.paddingBottom &&
    css`
      padding-bottom: ${getVal(p.paddingBottom)};
    `;
  const left =
    p.paddingLeft &&
    css`
      padding-left: ${getVal(p.paddingLeft)};
    `;

  return [sides, ends, top, right, bottom, left];
};

export const padding = p => p.theme.makeResponsive(p, _padding);
