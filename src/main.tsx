import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App'
import {HeroUIProvider} from "@heroui/react";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HeroUIProvider>
          <Provider store={store}>
          <main >
              <App />
          </main>
          </Provider>
      </HeroUIProvider>
  </StrictMode>,
)
