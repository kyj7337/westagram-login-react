import React, {Component} from 'react';
import '../css/Button.css'

class Button extends Component{
    render(){
    
      return(
        <div>
         <button 
         id={this.props.button_id} 
         value="로그인"className="login" 
         disabled={this.props.disabled}
         onClick={this.props.enter } >
               로그인 
          </button>
        </div>
      );
    }
  }

   
  export default Button;

    // disabled={this.props.disabled}
  // function(){
  //   if(this.props.password && this.props.phone){
  //     this.setState({disabled:'false'})
  //   }else(this.setState({disabled:'true'}) )}