import React from 'react'
import TodoItem from './com/TodoItem'

export default function Todo(props) {
    return (
        <div>
            <div className="container">
<h1 align="center">Todos List</h1>
            {/* <h3> */}
            {props.ArrToObj.map((data)=>{

                return <TodoItem todo={data} Dlt={props.Dlt} />
            })}
        {/* {Todo={ArrtoObj}} */}
            {/* </h3> */}
            </div>
        </div>
    )
}
