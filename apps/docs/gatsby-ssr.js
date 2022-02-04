import * as React from "react";
import { getCssText, globalStyles } from "@myturborepo/ui";

export const onRenderBody = ({ setHeadComponents }) => {
  globalStyles();
  setHeadComponents([
    <style
      id="stitches"
      key="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />,
  ]);
};
