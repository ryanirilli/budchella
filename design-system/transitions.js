import styled, { css } from "styled-components";

const _transition = p => {
  if (typeof p.transition === "undefined") {
    return;
  }
  return css`
    transition: ${typeof p.transition === "string" ? p.transition : "all"} 1s
      ease;
  `;
};

export const transition = p => p.theme.makeResponsive(p, _transition);
