import ReactDOM from "react-dom/client"
import React from "react"
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)