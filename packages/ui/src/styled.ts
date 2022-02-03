import themeConfig from "@myturborepo/theme";
import { createStitches, CSS as StitchesCSS } from "@stitches/react";

const { styled, css, config, theme } = createStitches({
  theme: themeConfig,
});
export { styled, css, config, theme };

export type CSS = StitchesCSS<typeof config>;
