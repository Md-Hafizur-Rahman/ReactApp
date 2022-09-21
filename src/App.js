import './App.css';
import Welcome from './component/Welcome';
import Avatar from './component/Comment';
import Page from './component/Showhide';
import Toggle from './component/helo';
import LoginControl from './component/Logincontrol';
import Greeting from './component/Greeting';

import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Welcome name='hafizur' lastname='rahman'>
          <p>welcom to the react js.</p>
          <button>Action</button>
        </Welcome>
        <Toggle/>
        <Avatar/>
        <Page/>
        <Greeting isLoggedIn={false} />
        <LoginControl/>
      </div>
    );
  }
}
export default App;
