import React, {Component} from 'react';
import '../css/Phone.css'

class Phone extends Component{
    render(){
      return(
        <div>
          <input onChange={this.props.addId} type="text" className="phone" placeholder="전화번호, 사용자 이름 또는 이메일"
          id="box2"
          // onKeyDown={function(e){
          //   this.props.push();
          // }.bind(this)}
          ></input>
        </div>
      );
    }
  }

  export default Phone;