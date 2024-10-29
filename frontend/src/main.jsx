import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { NavSearchProvider } from './context/NavSearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <NavSearchProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </NavSearchProvider>,
)
