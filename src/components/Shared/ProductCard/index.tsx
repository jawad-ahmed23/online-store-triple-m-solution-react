import { Box, Image, Text, HStack, Button } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";
import { Product } from "../../../interfaces";

interface ProductCardProps {
  data: Product;
  onAddToCard: (prod: Product) => void;
}

export function ProductCard(props: ProductCardProps) {
  const { data, onAddToCard } = props;

  return (
    <Box
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Image src={data.imageUrl} alt={data.title} roundedTop="lg" />

      <Box p="6">
        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {data.title}
        </Text>

        <Box>${data.price}</Box>

        <HStack justifyContent="space-between">
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <BsStar
                  key={i}
                  color={i < data.avgRating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {data.totalReviews} reviews
            </Box>
          </Box>

          <Button
            colorScheme="yellow"
            onClick={() => {
              onAddToCard(data);
            }}
          >
            Add to Cart
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}
