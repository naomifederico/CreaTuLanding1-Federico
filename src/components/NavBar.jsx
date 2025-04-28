import * as React from "react"
import { Flex, Text, MenuButton, Menu, MenuList, Button, MenuItem } from '@chakra-ui/react'
import CartWidget from "./CartWidget";
import logo from '../img/logo.img.jpeg';

const NavBar = () => {
    return (
        <Flex 
        alignItems="center" 
        justifyContent="space-between" 
        width="400vh" 
        border="1px solid black" 
        padding="0 20px" 
        margin="10px" 
        backgroundColor="#e8833a" 
        >
            <div>
                <div>
                    <img src={logo} className="img-logo" alt="Logo Mi Atelier 3D" />
                </div>
                <div>
                    <Text>Mi Atelier 3D</Text>

                </div>
            </div>
            <Menu>
                <MenuButton as={Button}>
                    Productos
                </MenuButton>
                <MenuList>
                    <MenuItem>Personajes articulados</MenuItem>
                    <MenuItem>Vasos</MenuItem>
                    <MenuItem>Alcancías</MenuItem>
                    <MenuItem>Llaveros</MenuItem>
                    <MenuItem>Objetos personalizados</MenuItem>
                </MenuList>
            </Menu>

            <CartWidget />


        </Flex>
    )
}

export default NavBar;
