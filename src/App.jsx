import { useRef } from "react"
import FormInput from "./FormInput"

const App = () => {
  // pass this inputRef to the Child component grab the input element and it's functionality
  const inputRef = useRef(null)

  return (
    <div>
      <FormInput inputRef={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
   

      
      
    </div>
  )
}

export default App
