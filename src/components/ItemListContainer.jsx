import { Container } from "@chakra-ui/react";
import * as React from "react"

const ItemListContainer = ({greeting}) => {
    console.log(greeting)
    
    return (

     <Container 
    display="flex"
    fontSize="2rem" 
    height="100%"
    width="100vw"
    alignItems="center"
    justifyContent="center"
    >

    <div>
        {greeting}
    </div>

    </Container>
    )
    
};

export default ItemListContainer;