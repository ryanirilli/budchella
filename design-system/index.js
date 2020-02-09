import styled from "styled-components";
import { fullPage, centerContent } from "./containers";
import { background } from "./backgrounds";
import { padding } from "./padding";
import { align, font } from "./typography";
import { visibility } from "./visibility";
import { transition } from "./transitions";

export const E = styled.div`
  ${fullPage}
  ${centerContent}
  ${background}
  ${padding}
  ${align}
  ${font}
  ${visibility}
  ${transition}
`;
