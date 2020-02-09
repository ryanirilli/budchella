import styled, { css } from "styled-components";
import { background } from "./backgrounds";

const _fullPage = p =>
  p.fullPage &&
  css`
    width: 100%;
    min-height: 100vh;
  `;

export const fullPage = p => p.theme.makeResponsive(p, _fullPage);

const _centerContent = p =>
  p.centerContent &&
  css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

export const centerContent = p => p.theme.makeResponsive(p, _centerContent);

export const _flex = p => {
  const display =
    p.flex &&
    css`
      display: flex;
    `;
  const align =
    p.flexAlignCenter &&
    css`
      align-items: center;
    `;
  return [display, align];
};

export const flex = p => p.theme.makeResponsive(p, _flex);
