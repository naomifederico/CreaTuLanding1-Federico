import * as React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {

  const { getTotalCount } = useContext(CartContext)
  const totalCount = getTotalCount();


  return (
    <Flex alignItems="center" gap={2} cursor="pointer" color="white">
      <FaCartPlus size={20} /> {totalCount}
    </Flex>
  );
};

export default CartWidget;