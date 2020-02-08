import styled, { css } from "styled-components";

const _background = p => {
  const color =
    p.bgColor &&
    css`
      background-color: ${p.theme.colors[p.bgColor] || p.bgColor};
    `;
  const image =
    p.bgImage &&
    css`
      background-image: url(${p.bgImage});
      background-size: ${p.bgSize || "cover"};
    `;
  return [color, image];
};

export const background = p => p.theme.makeResponsive(p, _background);
