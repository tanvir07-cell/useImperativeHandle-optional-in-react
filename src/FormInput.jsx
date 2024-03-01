/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react"

const FormInput = ({inputRef}) => {
    // create a ref to the input element called childInputRef
    const childInputRef = useRef(null)

    console.log(inputRef.current)

    // expose this childInputRef to the parent component

    useEffect(()=>{
        if(inputRef){
            inputRef.current = {
                focus: () => childInputRef.current.focus()
            }
        }
       
    },[inputRef])



  return (
    <div>
        <input type="text" ref={childInputRef}/>
      
    </div>
  )
}

export default FormInput
