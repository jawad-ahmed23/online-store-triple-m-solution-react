import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="#000" minH="50px" color="white" py="20px" mt="50px">
      <Text textAlign="center">
        {new Date().getFullYear()} &copy; copyright, Jawad Ahmed
      </Text>
    </Box>
  );
}
