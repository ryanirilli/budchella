import styled, { css } from "styled-components";

const _position = p => {
  if (typeof p.absolute !== "string") {
    return;
  }
  const arr = p.absolute.split(",");
  const vals = arr.reduce((acc, v) => {
    const [prop, value] = v.split(":");
    return `${acc} ${prop}: ${value || 0}px;`;
  }, "");
  return css`
    position: absolute;
    width: 100%;
    ${vals}
  `;
};

export const position = p => p.theme.makeResponsive(p, _position);
