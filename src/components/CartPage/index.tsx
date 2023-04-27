import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { RootState } from "../../slices";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setTotalPrice(
      items.reduce((acc, item) => item.price * item.quantity + acc, 0)
    );
  }, [items]);

  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      minH="100vh"
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({items.length} items)
          </Heading>

          <Stack spacing="6">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary totalPrice={totalPrice} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Text as={Link} to="/" color={mode("blue.500", "blue.200")}>
              Continue shopping
            </Text>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CartPage;
