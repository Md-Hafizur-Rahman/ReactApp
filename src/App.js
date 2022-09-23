import './App.css';
import Welcome from './component/Welcome';
import Avatar from './component/Comment';
import Page from './component/Showhide';
import Toggle from './component/helo';
import LoginControl from './component/Logincontrol';
import Greeting from './component/Greeting';
import Blog from './component/practise';
import Form from './component/form';
import Calculator from './component/calculator';
import { WelcomeDialog } from './component/composition';
import SignUpDialog from './component/composition';

import React,{Component} from 'react';

class App extends Component{
  render(){
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
      {id: 1, title: 'Title number 1', content: 'the content of the title 1'},
      {id: 2, title: 'title number 2', content: 'the content of the title 2'}
    ];
    return(
      <div className='App'>
        <Welcome name='hafizur' lastname='rahman' numbers={numbers}>
          <p>welcom to the react js</p>
          <button>Action</button>
        </Welcome>
        <Toggle/>
        <Avatar/>
        <Page/>
        <Greeting isLoggedIn={false} />
        <LoginControl/>
        <Blog posts={posts} />
        <Form/>
        <Calculator/>
        <WelcomeDialog/>
        <SignUpDialog/>
      </div>
    );
   
  }
}
export default App;
