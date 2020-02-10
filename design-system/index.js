import React from "react";
import styled from "styled-components";
import { fullPage, centerContent, flex } from "./containers";
import { background } from "./backgrounds";
import { padding } from "./padding";
import { align, font } from "./typography";
import { visibility } from "./visibility";
import { transition } from "./transitions";
import { position } from "./positions";
import { grid } from "./grid";
import { widths } from "./widths";
import { button } from "./buttons";

export const E = styled.div`
  ${fullPage}
  ${centerContent}
  ${background}
  ${padding}
  ${align}
  ${font}
  ${visibility}
  ${transition}
  ${position}
  ${flex}
  ${grid}
  ${widths}
  ${button}
`;

export const makeStyledComponent = () =>
  React.forwardRef((p, ref) => <E {...p} ref={ref} />);
