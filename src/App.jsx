import { NavBar } from './Composants/Navbar';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Layout/Home';
import Stocks from './Layout/Stocks';
import Test from './Composants/Test';

class App extends Component {
  render() {
    return (
      <div className="bg-secondary-subtle h-100">
        <NavBar></NavBar>
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/f" element={<Stocks/>}></Route>
         <Route path="/test" element={<Test/>}></Route>
        </Routes>
    
          

        <div className="position-absolute" style={{bottom:0}}>
    2 days ago
  </div>
      </div>
      
    );
  }
}

export default App;
