import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
  Header: ReactNode;
  Footer: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children, Header, Footer } = props;
  return (
    <Box w="full">
      <Box>{Header}</Box>
      {children}
      <Box>{Footer}</Box>
    </Box>
  );
}
