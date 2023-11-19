"use client";
import { Button, Pane, Heading, Text, majorScale } from "evergreen-ui";

export default function Header() {
  return (
    <Pane
      display="flex"
      elevation={1}
      padding={16}
      background="blue400"
      borderRadius={3}
    >
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={700}>SUZUDEN-DASHBOARD</Heading>
        

      </Pane>


    </Pane>
  );
}
