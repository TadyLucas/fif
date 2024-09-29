import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <HomePage/>
  </StrictMode>,
)
