import { useState } from 'react'
import { NavBar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import './App.css'
import { Outlet } from 'react-router';
import { SearchProvider } from './Components/SearchContext';

function App() {
  return (
    <>
      <div className="bg-secondary-subtle h-100">
        <SearchProvider>
          <NavBar></NavBar>
          <Outlet/>
          <Footer></Footer>
        </SearchProvider>
      </div>      
    </>
  )
}

export default App
