import './index.css'
import React from 'react';
import Header from './components/header';
import {correct,next,fetch_data} from './logic.js';
import Result from './components/result';
import Card from './components/card';




class Quiz extends React.Component{
  constructor(props){
    super(props);
    
    this.tryAgainClick=this.tryAgainClick.bind(this);
    this.state={question:[],
                answers:[],
                responses:[[],[],[],[]],
                id:[],
                icon:[],
                show_next_butt:false,
                show_result:false,
                correct_answers:0,
                i:0,
                activate_button:true,
                start_button:true,
   };
     
}

componentDidMount(){fetch_data(this)}
handleClick(n) {correct(n,this)}
nextClick(){next(this)}

tryAgainClick(){
  
       this.setState({
        id:[],
        icon:[],
        show_next_butt:false,
        show_result:false,
        correct_answers:0,
        activate_button:true,
        i:0,})
}
          
render(){
  if(!this.state.show_result){
     return(<div id='contenedor'>
                   <div id='cabeza'>
                            <Header value={true} />
                   </div>
                   <div id='cuerpo'>
                   {!this.state.start_button && 
                   <Card question={this.state.question[this.state.i]} 
                          responses={this.state.responses[this.state.i]} 
                          id={this.state.id} 
                          icon={this.state.icon} 
                          show={this.state.show_next_butt} 
                          
                          handle={
                             {butt_0:()=>this.handleClick(0),
                              butt_1:()=>this.handleClick(1),
                              butt_2:()=>this.handleClick(2),
                              butt_3:()=>this.handleClick(3),
                              next:()=>this.nextClick(),
                             }
                             
                          } />
                      }
                      {this.state.start_button && <section id='preguntas'><button type='button' className='startButton' onClick={()=>this.setState({start_button:false})}>Start
                                    </button> </section> }
                        
                      
                     
                   </div>
                   <p class="creador">Created by Mavensky Louissaint-devChallenges.io</p>
            </div>)
          }
   
   else{
      return (<div><Result value={this.state.correct_answers} onClick={this.tryAgainClick}/>
         <p class="creador">Created by Mavensky Louissaint-devChallenges.io</p>
         </div>)
 }
}
 
}
export default Quiz;
