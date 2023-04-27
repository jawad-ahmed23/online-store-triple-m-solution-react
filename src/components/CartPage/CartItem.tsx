import {
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { Item, addItem, deleteItem, removeItem } from "../../slices/cart";

type CartItemProps = {
  item: Item;
};

export const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch();
  const {
    item,
    // onChangeQuantity,
    // onClickDelete,
  } = props;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={item.title}
        description={""}
        image={item.imageUrl}
        isGiftWrapping
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <HStack>
          <Text
            onClick={() => {
              dispatch(removeItem(item.id));
            }}
            cursor="pointer"
            fontSize="xl"
            fontWeight="bold"
          >
            -
          </Text>
          <Text>

          {item.quantity}
          </Text>
          <Text onClick={() => {
              dispatch(addItem(item));
            }} cursor="pointer" fontSize="xl" fontWeight="bold">+</Text>
        </HStack>
        <PriceTag price={item.price * item.quantity} currency={"USD"} />
        <CloseButton
          aria-label={`Delete ${item.title} from cart`}
          onClick={() => {
            dispatch(deleteItem(item.id))
          }}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        {item.quantity}
        <PriceTag price={item.price * item.quantity} currency={"USD"} />
      </Flex>
    </Flex>
  );
};
