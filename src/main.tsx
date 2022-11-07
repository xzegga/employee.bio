import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './features/Auth/Login'
import {Provider} from './context/contextProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ChakraProvider>        
            <Routes>
              <Route path='/*' element={<App />} />
              <Route path='/login' element={<Login />} />          
            </Routes>        
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
