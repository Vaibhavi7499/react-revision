import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RoomContainer from './contexts/RoomContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoomContainer>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </RoomContainer>
  </StrictMode>,
)
