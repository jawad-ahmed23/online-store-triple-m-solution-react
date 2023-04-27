import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <VStack spacing={4} align="center" minH="100vh">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="150"
        height="150"
      >
        <path
          fill="#4BB543"
          d="M9 16.17l-3.88-3.88L4 14l5 5 10-10-1.41-1.42z"
        />
      </svg>

      <Heading fontFamily="Roboto" size="md" mb={4}>
        Thank You For Your Purchase!
      </Heading>
      <Text fontSize="md" mt={4}>
        We appreciate your business and hope you enjoy your purchase.
      </Text>
      <Text as={Link} to="/" color={"blue.500"}>
        Continue shopping
      </Text>
    </VStack>
  );
};

export default ThankYouPage;
