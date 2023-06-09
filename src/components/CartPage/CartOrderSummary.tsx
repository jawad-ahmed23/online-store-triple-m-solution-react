import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { Link } from "react-router-dom";

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({ totalPrice, hideBtn }: { totalPrice: number, hideBtn?: boolean }) => {
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(totalPrice)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Text as={Link} to="#" textDecor="underline">
            Calculate shipping
          </Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Text as={Link} to="#" textDecor="underline">
            Add coupon code
          </Text>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(totalPrice)}
          </Text>
        </Flex>
      </Stack>
      {hideBtn ? (

        null
      ):
      <Button
        colorScheme="yellow"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        as={Link}
        to="/checkout"
      >
        Checkout
      </Button>
      }
    </Stack>
  );
};
