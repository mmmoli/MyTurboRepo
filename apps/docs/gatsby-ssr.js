import * as React from "react";
import { getCssText } from "@myturborepo/ui";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      key="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />,
  ]);
};
