import { NavBar } from './Composants/Navbar';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Layout/Home';
import Stocks from './Layout/Stocks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
 
  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div className="bg-secondary-subtle h-100">
        <NavBar></NavBar>
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/f" element={<Stocks/>}></Route>
        </Routes>
        <header className="App-header">
      
          <h1>Stockler</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
        </header>
        <div className="position-absolute" style={{bottom:0}}>
    2 days ago
  </div>
      </div>
      
    );
  }
}

export default App;
