import React from "react"
import "./style.css"
import Head from "./components/Head"
import Form from "./components/Form"
import TaskComp from "./components/Tasklist"

function App() {

  // Managing input Using onChange and State 
  const [todoInput, settodoInput] = React.useState("")

  // Function for setting input
  function InputValue(event) {  

    settodoInput(event.target.value)

  }

  //Creating an array of objects containing id and input value for each input 
  const [TaskList, setTaskList] = React.useState([])

  //Function for setting tasklist and validating input
  function taskAdder(event) {

    event.preventDefault()
    const value=todoInput
    const DOMelement=document.getElementById("add-todo")

    if (value !== ""){

      DOMelement.placeholder="Enter A Task"
      DOMelement.style.border="none"

      setTaskList(prevValues => ([
        ...prevValues,
        {
          id: prevValues.length,
          title: todoInput
        } 
      ]))

    }
    else{
      DOMelement.placeholder="please Enter A Task"
      DOMelement.style.border="1px solid red"
    }


  }

  // Function to handle Removing of task
  function handleRemove(id) {

    setTaskList(prev => prev.filter(task => task.id !== id))

  }

  return (    
    <>
      <div className='whole'>
        <Head />

        <Form 
          onSubmitFunc={taskAdder}
          InputValue={InputValue}
        />

        <TaskComp         
          list={TaskList}
          removeFunc={handleRemove}
        />

      </div>

    </>
  )
}

export default App
