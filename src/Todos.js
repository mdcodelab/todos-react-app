//Shows Todos list in the UI

import React from 'react'

function Todos({todos, deltodos}) {
    const myList = todos.length ? (
        todos.map (x => {
            return (
                <div key = {x.id} onClick = {() => deltodos(x.id)}>
                    <div>{x.content}</div>
                </div>
            )
        })
    )
     : <p>There are no todos left</p> 
    return (
        <div>{myList}</div>
    )
}

export default Todos;

