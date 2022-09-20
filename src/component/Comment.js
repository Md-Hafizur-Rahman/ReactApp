import React from 'react';
import Button from './Buton';
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
      }

      handleClick = (locale) => {
        this.setState({
            locale,
        });
    };
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
        const { date, locale } = this.state;
        return(
            <div>
                <h1 className='heading'>
                    <span className='text'>{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale="en-US">
                    Click here
                </Button>
            </div>
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