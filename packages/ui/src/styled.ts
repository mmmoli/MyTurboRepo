import themeConfig from "@myturborepo/theme";
import { createStitches, CSS as StitchesCSS } from "@stitches/react";

const { styled, css, config, theme, getCssText } = createStitches({
  theme: themeConfig,
});
export { styled, css, config, theme, getCssText };

export type CSS = StitchesCSS<typeof config>;
