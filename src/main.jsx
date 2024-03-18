import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routes.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

const theme = extendTheme({
  colors: {
    primary: "#101828",
    secondary: "#50D1B2"
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={Router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
