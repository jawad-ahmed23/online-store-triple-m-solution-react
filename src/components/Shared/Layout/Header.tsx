import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, useDisclosure, Text } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { CCart } from "../..";

export default function Header() {
  return (
    <Box bg="#000" h="70px" color="white">
      <HStack
        alignItems="center"
        h="full"
        justifyContent="space-between"
        maxW="1300px"
        mx="auto"
      >
        <Text>Logo</Text>

        <CCart />
      </HStack>
    </Box>
  );
}
