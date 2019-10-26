import React, {Component} from 'react';
import './App.css';
import Logo from "./components/Logo";
import Phone from"./components/Phone";
import Password from "./components/Password";
import Button from "./components/Button";
import Forgot from "./components/Forgot";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      disabled:true,
      password: '',
      phone: '',
      button_id:'login' ,
      

    }
   
    }

    alertfunction=(e)=>{
      alert('로그인 되었습니다.')

    }

    enter=(e)=>{
      if(e.key=='Enter'){
        this.alertfunction();
      }
    }


    addId = (e) => {
      this.setState({phone:e.target.value}) 
      console.log(this.state)
   }
   //target의 value 값을 가져온다...
   colorchange=(e)=>{
     this.setState({button_id:'login2'})
   }


   colorchange_disabled=(e)=>{
     this.setState({button_id:'login'})
   }

   addPassword =(e) => {
    this.setState({password:e.target.value})
    console.log(this.state)//입력값 계속 보기

    if(this.state.password.length>=3 && this.state.phone.length>=3){
      this.setState({disabled:false})
      this.colorchange();
    }else{
      this.setState({disabled:true})
      this.colorchange_disabled();
    }
   }
   //onchange 중요

  render(){
    
    return(
    
        <div className="wrapper">
            <Logo></Logo>
            <Phone 
            addId={this.addId}
            ></Phone>
            <Password
            alert={this.enter}
            addPassword={this.addPassword}
            press={this.enter}
            ></Password>
            <Button
            disabled={this.state.disabled}
            activation={function(e){
              this.setState({disabled:'false'})
            }.bind(this)}
            button_id={this.state.button_id}
            colorchange={function(e){
              this.setState({button_id:'login2'})
            }}
            enter={this.alertfunction}
            ></Button>
            <Forgot></Forgot>
        </div>
    )
  }
}


export default App;