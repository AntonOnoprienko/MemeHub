import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App'
import {HeroUIProvider} from "@heroui/react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HeroUIProvider>
          <main >
              <App />
          </main>
      </HeroUIProvider>
  </StrictMode>,
)
