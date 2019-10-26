import React, {Component} from 'react';
import '../css/passwordtext.css'

class Password extends Component{
    
  render(){
      return(
        <div>
         <input onChange={this.props.addPassword}
         type="text" 
         type="password"
         className="password" placeholder="비밀번호"
         id="box2"
         onKeyPress={this.props.press}
         ></input>
        </div>
      );
    }
  }

  export default Password;