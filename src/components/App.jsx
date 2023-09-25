import { Component } from "react"
import { Timer } from "./timer/Timer"
import { TimerButton } from "./timer/TimerButton"
import { Value } from "./Value"

export class App extends Component {
 
state = {
  showTimer: false
}
toggleTimer=()=>{
this.setState((prevState)=>{
 return {
    showTimer: !prevState.showTimer}
})
}
  render(){
    return (
     <>
     {this.state.showTimer && <Timer/>}
     <TimerButton onToggle={this.toggleTimer} textButton={this.state.showTimer} />
  <Value/>
     </>
    );
  }

};
