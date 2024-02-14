import React from "react"



export default function Head(props){

    return (

        <form onSubmit={props.onSubmitFunc}>
        <label>
          Add Todo
        </label>
        <input type='text' placeholder='Enter A Task ' id='add-todo' onChange={props.InputValue} />
        <button className='add-button'>Add Todo</button>

      </form>

    )


}