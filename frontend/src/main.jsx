import ReactDOM from "react-dom/client"
import React from "react"
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)