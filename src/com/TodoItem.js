import React from 'react'
import "./Todo.css"

export default function TodoItem({ todo, Dlt }) {
        return (
                <div className='center'>
                        <h6>No
                                {todo.no}
                        </h6>
                        <h4>
                                {todo.title}
                        </h4>
                        <h5>Name:
                                {todo.name}
                        </h5>
                        <button className='btn sm btn-danger' onClick={()=>{Dlt(todo)}}>Delete</button>
                        <hr />

                </div>
        )
}
