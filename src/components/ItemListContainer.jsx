import { Box, Flex, Text, Image, Heading, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../service/products.service";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ id, image, title, description, price, onClick }) => {
    return (
        <Box
            onClick={onClick}
            cursor="pointer"
            borderWidth="1px"
            borderRadius="lg"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
                transform: 'scale(1.03)',
                boxShadow: 'lg',
            }}
        >
            <Image alt={title} src={image} height={'200px'} objectFit={'cover'} />
            <Box padding={4}>
                <Heading size={'md'} marginBottom={2}>{title}</Heading>
                <Text noOfLines={2} height={'60px'}>{description}</Text>
                <Text fontSize={'18px'}>{price}</Text>
            </Box>
        </Box>
    );
};


const ItemListContainer = ({ products }) => {

    const navigate = useNavigate()


    return (
        <Box width={'100%'} overflowX={'hidden'}>
            <SimpleGrid columns={{ lg: 4 }} spacing={4} margin={3}>
                {products.map((product) => (
                    <ItemCard
                        key={product.id}
                        id={product.id}
                        image={product.thumbnail}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        onClick={() => navigate(`/item/${product.id}`)}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );

};


export default ItemListContainer;
