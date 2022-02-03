import * as React from "react";
import { VariantProps } from "@stitches/react";
import { styled, theme } from "../styled";

export const Button = styled("button", {
  backgroundColor: theme.colors.green500,
  borderRadius: "9999px",
  fontSize: "13px",
  border: "0",
});

export type ButtonVariants = VariantProps<typeof Button>;

export default Button;
