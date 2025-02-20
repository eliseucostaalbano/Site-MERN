import { Box, useColorModeValue } from "@chakra-ui/react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar/navbar"
import HomePage from "./pages/Homepage"
import CriarPage from "./pages/CriarPage"

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("white.100", "gray.900")}>
     <Navbar/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/criar" element={<CriarPage/>}/>
     </Routes>
    </Box>
  )
}

export default App
