import { NavBar } from './Components/Navbar';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Layout/Home';
import {Stocks} from './Layout/Stocks';
import {Search} from './Layout/Search';
import Test from './Components/Test';
import { Footer } from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="bg-secondary-subtle h-100">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/f" element={<Stocks/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>      
    );
  }
}

export default App;
