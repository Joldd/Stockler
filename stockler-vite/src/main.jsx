import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './Layout/Home';
import {Stocks} from './Layout/Stocks';
import {Search} from './Layout/Search';
import Test from './Components/Test';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/f" element={<Stocks/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
