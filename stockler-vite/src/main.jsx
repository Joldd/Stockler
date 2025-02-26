import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './Layout/Home';
import {Stocks} from './Layout/Stocks';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/stocks" element={<Stocks/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
