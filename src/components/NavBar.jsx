import * as React from "react"
import { Flex, Text, MenuButton, Menu, MenuList, Button, MenuItem } from '@chakra-ui/react'
import CartWidget from "./CartWidget";
import logo from '../img/logo.img.jpeg';
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCategories } from "../service/products.service";

const NavBar = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const handleClick = () => {
        navigate('/')
    }

    useEffect(() => {
        getAllCategories()
            .then((res) => setCategories(res.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Flex
            as="nav"
            position="sticky"
            top="0"
            zIndex="1000"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid black"
            padding="0 20px"
            backgroundColor="#e8833a"
            boxShadow="sm"
            height="60px"
            margin="o"
        >
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>
                <img
                    src={logo}
                    alt="Logo Mi Atelier 3D"
                    style={{ height: '40px', width: 'auto' }}
                />
                <Text ml={2} color="white" fontWeight="bold">Tienda Online</Text>
            </div>

            <Menu>
                <MenuButton as={Button} colorScheme="orange">
                    Categorías
                </MenuButton>
                <MenuList>
                    {categories.map(item => (
                        <MenuItem
                            key={item.slug}
                            onClick={() => navigate(`/category/${item.slug}`)}  // <- backticks aquí
                        >
                            {item.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

            <CartWidget />
        </Flex>
    )
}

export default NavBar;