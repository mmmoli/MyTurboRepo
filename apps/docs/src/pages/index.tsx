import { Button, Box } from "@myturborepo/ui";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <Box
      css={{
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      <h1>docs 2</h1>
      <Button>Click me</Button>
    </Box>
  );
};

export default HomePage;
