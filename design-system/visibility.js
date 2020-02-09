import styled, { css } from "styled-components";

const _visibility = p => {
  if (typeof p.isVisible === "undefined") {
    return;
  }
  return css`
    visibility: ${p.isVisible ? "visible" : "hidden"};
  `;
};

export const visibility = p => p.theme.makeResponsive(p, _visibility);
