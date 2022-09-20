import './App.css';
import Welcome from './component/Welcome';
import Avatar from './component/Comment';
import Toggle from './component/helo';
import React,{Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Welcome name='hafizur' lastname='rahman'>
          <p>welcom to the react js.</p>
          <button>Action</button>
        </Welcome>
        <Avatar/>
        <Toggle/>
      </div>
    );
  }
}


export default App;
