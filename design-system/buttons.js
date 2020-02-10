import styled, { css } from "styled-components";

const _button = p => {
  const mainButtonStyles =
    p.button &&
    css`
      padding: 0;
      border: none;
      font: inherit;
      color: inherit;
      cursor: pointer;
      text-decoration: none;
    `;
  const largeButton =
    p.buttonSizeMedium &&
    css`
      padding-top: ${p.theme.spacing.m}px;
      padding-bottom: ${p.theme.spacing.m}px;
      padding-left: ${p.theme.spacing.l}px;
      padding-right: ${p.theme.spacing.l}px;
      font-size: ${p.theme.fontSizes.s};
    `;
  const pillButton =
    p.buttonPill &&
    css`
      border-radius: ${p.theme.spacing.xxl}px;
    `;
  return [mainButtonStyles, largeButton, pillButton];
};

export const button = p => p.theme.makeResponsive(p, _button);
