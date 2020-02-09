import React from "react";
import styled from "styled-components";
import { fullPage, centerContent, flex } from "./containers";
import { background } from "./backgrounds";
import { padding } from "./padding";
import { align, font } from "./typography";
import { visibility } from "./visibility";
import { transition } from "./transitions";
import { position } from "./positions";

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
`;

export const makeStyledComponent = () =>
  React.forwardRef((p, ref) => <E {...p} ref={ref} />);
