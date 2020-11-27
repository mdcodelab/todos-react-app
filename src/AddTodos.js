
import React, { Component } from 'react'

class AddTodos extends Component {
    state = {
        contain: null
    }

    Change = (e) => {
    this.setState ({
        [e.target.id]: e.target.value
    })
    }

    Submit = (e) => {
        e.preventDefault()
        this.props.addTodos(this.state)
        this.setState ({
           content: '' 
        })
    }


    render() {
        return (
            <div>
            <form onSubmit={this.Submit}>
                <label htmlFor='content'></label>
                <input type='text' id= 'content' value = {this.state.content} onChange={this.Change}></input>
                <button>Submit</button>
            </form>          
            </div>
        )
    }
}

export default AddTodos;
