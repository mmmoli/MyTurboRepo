import { Button, Box } from "@myturborepo/ui";

export default function Web() {
  return (
    <Box
      css={{
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      <h1>Web 2</h1>
      <Button>Click me</Button>
    </Box>
  );
}
