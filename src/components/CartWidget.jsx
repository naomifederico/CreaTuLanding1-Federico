import * as React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <Flex alignItems="center" gap={2} cursor="pointer" color="white">
      <FaCartPlus size={20} />
      <Text fontSize="md" fontWeight="bold">
        1
      </Text>
    </Flex>
  );
};

export default CartWidget;