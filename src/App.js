
import { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {
 
    
  


  render() {
    return (
      <div className="App">
        <div className='navbar'>
          <Navbar title="For You" />
        </div>
        <div className='add-user'>
          <AddUser/>
        </div>
        <div className='content'>
          <Users/>
        </div>
        
      </div>
    );
  }

}

export default App;
