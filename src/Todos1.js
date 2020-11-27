import React from 'react'

function Todos({todos, deltodos}) {
    const myList = todos.map (x => {
        return (<div onClick = {()=> deltodos(x.id)} key = {x.id}>
            <div>{x.content}</div>
        </div>

        )
    })
    return (
        <div>
         {todos.length ? myList : <p>There are no todis left</p>}</div>



    )
}

export default Todos
