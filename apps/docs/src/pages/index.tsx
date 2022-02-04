import { Button, Box, theme } from "@myturborepo/ui";
import React from "react";

export const HomePage: React.FC = () => {
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
