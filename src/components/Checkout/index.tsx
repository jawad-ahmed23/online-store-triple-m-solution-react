import React, { useEffect, useState } from "react";
import {
  VStack,
  Heading,
  Divider,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { FaCreditCard, FaCalendar, FaLock } from "react-icons/fa";
import { CartOrderSummary } from "../CartPage/CartOrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { RootState, clearCart } from "../../slices";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const SUBMIT_ORDER_MUTATION = gql`
  mutation SubmitOrder($order: OrderInput!) {
    submitOrder(order: $order) {
      submit
    }
  }
`;

const Checkout = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const [submitOrder] = useMutation(SUBMIT_ORDER_MUTATION);
  const [name, setName] = useState('');
  const [address, setAddres] = useState('');

  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setTotalPrice(
      items.reduce((acc, item) => item.price * item.quantity + acc, 0)
    );
  }, [items]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const { data } = await submitOrder({
        variables: {
          order: {
            products: items.map((item) => item.title),
            total: items.length,
            name: name,
            address: address,
          
          },
        },
      });

      dispatch(clearCart());
      navigate("/thank-you");
      console.log(data.submit); // log the new order object returned by the mutation
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HStack alignItems="start" pt="70" maxW="1300px" mx="auto" spacing="20px">
      <VStack spacing={4} w={{ base: "full", md: "70%" }} align="stretch">
        <Heading size="xl" mb={4}>
          Checkout
        </Heading>
        <Divider />
        <Text fontSize="md" mt={4}>
          Shipping Information
        </Text>
        <InputGroup size="md" mt={2}>
          <InputLeftElement pointerEvents="none" children={<FaCreditCard />} />
          <Input type="text" placeholder="Name on Card" />
        </InputGroup>
        <InputGroup size="md" mt={2}>
          <InputLeftElement pointerEvents="none" children={<FaCreditCard />} />
          <Input type="text" placeholder="Card Number" />
        </InputGroup>
        <InputGroup size="md" mt={2}>
          <InputLeftElement pointerEvents="none" children={<FaCalendar />} />
          <Input type="text" placeholder="Expiration Date" />
          <InputLeftElement pointerEvents="none" children={<FaLock />} />
          <Input type="password" placeholder="CVV" ml={2} />
        </InputGroup>
        <Divider mt={4} mb={2} />
        <Text fontSize="md">Shipping Address</Text>
        <Input type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" mt={2} />
        <Input type="text" onChange={(e) => setAddres(e.target.value)} placeholder="Address" mt={2} />
        <Input type="text" placeholder="City" mt={2} />
        <Input type="text" placeholder="State" mt={2} />
        <Input type="text" placeholder="Zip Code" mt={2} />
        <Divider mt={4} mb={2} />

        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
          size="lg"
          colorScheme="yellow"
          mt={4}
        >
          Place Order
        </Button>
      </VStack>

      <Box w={{ base: "full", md: "30%" }}>
        <CartOrderSummary totalPrice={totalPrice} hideBtn />
      </Box>
    </HStack>
  );
};

export default Checkout;
