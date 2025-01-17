import { NavBar } from './Composants/Navbar';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Layout/Home';
import Stocks from './Layout/Stocks';
import Test from './Composants/Test';
import { Footer } from './Composants/Footer';

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
        <Footer></Footer>
      </div>      
    );
  }
}

export default App;
