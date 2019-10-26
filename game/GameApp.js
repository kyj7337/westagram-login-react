import React, {Component} from 'react';
import { ReactComponent } from '*.svg';

class GameApp extends ReactComponent{
    render(){
        return(
            <div>
                <h1>
                    안녕하세요
                </h1>
            </div>
        )
    }
}



// class Content extends Component{
//     render(){
//       return(
//         <article>
//           <h1>{this.props.title}</h1>
//           {this.props.desc}
//         </article>
//       );
//     }
//   }
export default GameApp;