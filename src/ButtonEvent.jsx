import React,{Component} from 'react';
import './button-event.css';

class ButtonEvent extends Component{
    constructor(){
        super();
        this.state ={
            buttonText:"Click Me! Please",
    initials:"JS",
    title:"Button Event App"
    }
        this.handleOnClick=this.handleOnClick.bind(this);
    }

    handleOnClick(){
this.setState(
    {
        buttonText:"Thanks,been Clicked!"
    }
)
    }
    render(){
        const {buttonText,initials,title} = this.state;
        return(
            <>
            <div className='app-container'>
                <div className='app-head'>
                    <h1><span className='initials'>{initials}</span>
                    <span className='title'>{title}</span>
                    </h1>
                </div>
                <div className='app-body'>
<p>Click the button to see the magic</p>
<button onClick={this.handleOnClick}>{buttonText}</button>
                </div>
            </div>
            </>
        );
    }
}

export default ButtonEvent;