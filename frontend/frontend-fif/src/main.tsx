import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/nav'
import FirstLook from './components/FirstLook'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <FirstLook />
  </StrictMode>,
)
