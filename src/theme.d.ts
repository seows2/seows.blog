import "styled-components";
import { Color } from "./styles/color";

declare module "styled-components" {
  export interface DefaultTheme {
    color: Color;
  }
}
