import { Button, Box, theme, globalStyles } from "@myturborepo/ui";
import React from "react";

export const HomePage: React.FC = () => {
  globalStyles();
  return (
    <Box
      css={{
        backgroundColor: theme.colors.gray500,
      }}
    >
      <h1>docs 2</h1>
      <Button>Click me</Button>
    </Box>
  );
};

export default HomePage;
