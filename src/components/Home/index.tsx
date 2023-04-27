import React from "react";
import {
  Box,
  Wrap,
  WrapItem,
  Heading,
  Input,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { ProductCard } from "../Shared/ProductCard";
import { Product } from "../../interfaces";

interface HomeProps {
  products: Product[];
  filteredProducts: Product[] | [];
  onSearchProduct: (title: string) => void;
  onAddToCard: (prod: Product) => void;
}

export default function CHome(props: HomeProps) {
  const { products, filteredProducts, onSearchProduct, onAddToCard } = props;
  return (
    <Box maxW="1300px" mx="auto">
      <Heading fontFamily="Roboto" textAlign="center" py="10">
        Find your Favourite Hat
      </Heading>
      <Flex justifyContent="flex-end" mb="30px">
        <Box>
          <FormLabel>Search</FormLabel>
          <Input
            w="300px"
            onChange={(e) => {
              onSearchProduct(e.target.value);
            }}
          />
        </Box>
      </Flex>
      <Wrap spacing="12" justify="space-between">
        {filteredProducts.length > 0
          ? filteredProducts.map((prod) => (
              <WrapItem>
                <ProductCard data={prod} onAddToCard={onAddToCard} />
              </WrapItem>
            ))
          : products.map((prod) => (
              <WrapItem>
                <ProductCard data={prod} onAddToCard={onAddToCard} />
              </WrapItem>
            ))}
      </Wrap>
    </Box>
  );
}
