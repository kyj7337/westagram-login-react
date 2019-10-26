import React, {Component} from 'react';

class Logo extends Component{
    render(){
      return(
        <div>
          <img src={require('../image/logo_text.png')}/>
        </div>
      );
    }
  }

  export default Logo;