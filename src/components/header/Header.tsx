"use client";
import { Button, Pane, Heading, Text, majorScale } from "evergreen-ui";

export default function Header() {
  return (
    <Pane
      display="flex"
      elevation={1}
      padding={16}
      background="green500"
      borderRadius={3}
    >
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>Suzuden Dashboard</Heading>
      </Pane>
    </Pane>
  );
}
