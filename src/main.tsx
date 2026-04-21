// main.tsx

//import { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.tsx'
import "modern-normalize/modern-normalize.css"

createRoot(document.getElementById('root')!).render(
//  <StrictMode>
    <App />
//  </StrictMode>,
)

