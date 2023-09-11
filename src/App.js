import './App.css';
import * as React from 'react';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      user:'',
    }
  };
  render() { 
    console.log(this.state.user)
    return (
      <div style={{margin:'10px'}}>
        <p style={{ fontWeight:'600', fontSize:'34px'}}>In App Bell Notification Tool</p>
        <div className='container'>
          {this.state.user ? (
            <>
              <Navbar />
              <Card />
              <span className='username'>{ this.state.user }</span>
            </>
          ): (
            <div className='login'>
              <input type='text' placeholder='username' onChange={(e) => this.setState({username: e.target.value})}/>
              <button onClick={() => this.setState({user: this.state.username})}>Login</button>
            </div>
            
          )}
        </div>
      </div>      
    );
  }  
}
export default App;