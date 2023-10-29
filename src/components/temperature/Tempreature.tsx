"use client";
import { Button, Pane, Heading, Text, majorScale } from "evergreen-ui";

export default function Temperature() {
  return (
    <Pane
      display="flex"
      width={400}
      height={300}
      margin={16}
      elevation={4}
      padding={16}
      background="green100"
      borderRadius={5}
      flexDirection="column"
    >
      <Heading>Today's Weather</Heading>
      <Text>Sunny</Text>
      <Text>10 degree C</Text>
    </Pane>
  );
}
