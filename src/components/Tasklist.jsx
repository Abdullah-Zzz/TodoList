import React from "react"



export default function Head(props){

    return (

        <ul>
          {props.list.map(task => (
            <li key={task.id}>
              <p>{task.title}</p>
              <div className='done-buttons'>
                <input type='checkbox' className='checkBox' />
                <button onClick={() => props.removeFunc(task.id)} id={task.id}>Remove.</button>
              </div>

            </li>

          ))}

        </ul>
    )


}