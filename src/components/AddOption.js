import React from "react"

export default class AddOption extends React.Component {
  state = {
    error: "",
    options: []
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

  handleFormSubmit = (e) => {
    e.preventDefault()
    let data = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(data)

    this.setState(() => {
      return {
        error: error
      }
    })
    if(!error) {
      e.target.elements.option.value = ""
    }
  }

  render() {
    return (
      <div>
      { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleFormSubmit}>
          <input name="option"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

