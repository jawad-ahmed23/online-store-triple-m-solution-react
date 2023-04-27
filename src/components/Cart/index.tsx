import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";
import { Badge, IconButton, Text, Box } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);

  console.log(items.length);

  return (
    <Link to="/cart">
      <Box pos="relative">
        <IconButton
          aria-label="Open shopping cart"
          icon={<FiShoppingCart />}
          variant="ghost"
          colorScheme="yellow"
          size="md"
          _hover={{
            bgColor: "none",
          }}
          _active={{
            bgColor: "none",
          }}
        ></IconButton>
        <Text pos="absolute" top="0" right="0">
          {items.length}
        </Text>
      </Box>
    </Link>
  );
}
