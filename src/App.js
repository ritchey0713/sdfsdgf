import React from 'react';
import Options from "./components/Options"
import AddOption from "./components/AddOption"

// action 
// options done
  // option done 
  // add option 
// header 
// modal 





// const randomThing = () =>  {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

export default class RandomThing extends React.Component {

  state = {
    options: ["option 1", "option 2", "option 3"],
    selectedOption: ""
  }

  handleAddOption = (option) => {
    if(!option) {
      return "bad option"
    } else if(this.state.options.indexOf(option) > -1) {
      return "exists!"
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      })
    }
  }

  componentDidMount() {
    // fires when a component loads, evwery time time it loads 
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => {
          return {
            options: options
          }
        })
      }
    } catch (e) {
        console.log(e)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // fires when the components updates/rerenders
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.options.options)
      localStorage.setItem("options", json)
      console.log("updated")
    }

  }

  render(){
    return (
      <div>
        <Options
          options={this.state.options}
         />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

// export default randomThing;
