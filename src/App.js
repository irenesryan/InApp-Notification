import "./App.css";
import React, {useState} from "react";
import NovuBell from "./component/NouvBell";
import axios from "axios";

function App() {
  const [status, setStatus] = useState();

  const sendNotification = async () => {
    console.log('send notification start')
    await axios
      .post("http://localhost:8000", { subscriberId: '{process.env.REACT_APP_SUBSCRIBER_ID}' })
      .then((res) => { setStatus(res.status); });
  };

  return (
    <div className="App">
      <div style={{display: 'flex', alignItems:'center', margin:'20px'}}>
        <h1 styles={{padding:'10px'}}>Notification by Novu</h1>
        <NovuBell subscriberId='{process.env.REACT_APP_SUBSCRIBER_ID}' styles={{padding:'10px'}} />
      </div>
      <button onClick={sendNotification}>Send Notification</button>
      {status === 201 && <h1>Notification Sent</h1>}
      {status === 400 && <h1>Notification could not sent</h1>}
    </div>
  );
}
export default App;

/* class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status:""
    }
  }
  sendNotification = async () => {
    await axios
      .post("http://localhost:8000", { subscriberId: `${process.env.React_APP_SUBSCRIBER_ID}` })
      .then((res) => {
        this.setState({status: res.status})
      });
  };
  render() {  
    return (
      <div className="App">
        <div>
          <h1>Notification by Novu</h1>
          <NovuBell subscriberId={process.env.REACT_APP_SUBSCRIBER_ID} />
        </div>
        <button onClick={this.sendNotification}>Send Notification</button>
        {this.state.status === 201 && <h1>Notification Sent</h1>}
        {this.state.status === 400 && <h1>Notification could not sent</h1>}
      </div>
    );
  }
}
export default App; */
