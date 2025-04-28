import * as React from 'react'
import { useState } from 'react'
//import './App.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './styles/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChakraProvider>
        <Box height='100 vh'>

          <NavBar />
          <ItemListContainer greeting="Bienvenidos a nuestra tienda online!" />

        </Box>

      </ChakraProvider>
    </>
  )
}

export default App
