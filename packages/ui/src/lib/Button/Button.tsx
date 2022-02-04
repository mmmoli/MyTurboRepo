import * as React from "react";
import { VariantProps } from "@stitches/react";
import { styled, theme } from "../../styled";

export const Button = styled("button", {
  backgroundColor: theme.colors.green500,
  border: "0",
  borderRadius: "9999px",
  color: "white",
  cursor: "pointer",
  fontSize: "13px",
  padding: `${theme.space[2]} ${theme.space[3]}`,

  "&:hover": {
    backgroundColor: theme.colors.purple500,
  },
});

export type ButtonVariants = VariantProps<typeof Button>;

export default Button;
