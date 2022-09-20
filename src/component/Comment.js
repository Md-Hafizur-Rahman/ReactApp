import React,{Component} from 'react';
class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
       
    render() {
        return(
            <h1 className='heading'>
            <span className='text'>{new Date().toLocaleTimeString(this.state.local)}</span>
        </h1>
        );
    }
}

/* const Avatar=props=>{
        return (
            <h1 className='heading'>
                <span className='text'>{new Date().toLocaleTimeString(props.local)}</span>
            </h1>
        );
      } */
export default Avatar;