import { useState } from 'react'
import { NavBar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import './App.css'
import { Outlet } from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-secondary-subtle h-100">
        <NavBar></NavBar>
        <Outlet/>
        <Footer></Footer>
      </div>      
    </>
  )
}

export default App
