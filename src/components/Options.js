import React from "react"
import Option from "./option"

const Options = (props) => {
  return (
    <div>
      <h1>list of options</h1>
        {
          props.options.map((option) => {
            return <Option
              key={option}
              optionText={option}
             />
          })

        }
        
        
    </div>
  )
}

export default Options
