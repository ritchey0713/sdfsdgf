import React from 'react';
import Options from "./components/Options"
import AddOption from "./components/AddOption"
import Header from "./components/Header"

//containers 
//App.js || index.js


//present components 



// controlled vs uncontrolled 

//routing client side (similar to sinatra)
export default class RandomThing extends React.Component {

  state = {
    options: ["option 1", "option 2", "option 3"],
    selectedOption: "",
    buttonColor: "red"
  }

  componentDidMount() {


  }

  componentDidUpdate(prevProps, prevState) {

  }

  render(){
    return (
      <div>
        <Options
          options={this.state.options}
         />
      </div>
    )
  }
}

//export default randomThing;
