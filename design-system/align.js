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
