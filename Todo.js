import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

// function Todo() {
//     //const todoItems=todosData.map(items => <TodoItem key={items.id} item={items}/>)
//     //or
//     const todoItems=todosData.map(function(items){
//         return (
//             <TodoItem item={items} key={items.id}/>
//         )
//     })
    
//     return(
//         <div className='todo-list'>
//            {todoItems}
//         </div>
//     )
// }

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            todos:todosData
        }
        //this.handlechange=this.handlechange.bind(this)
    }

    // handlechange(id){
    //     this.setState(prevState =>{
    //         const updatedTodos=prevState.todos.map(todo =>{
    //             console.log(todo)
    //             if(todo.id===id){
    //                 todo.completed=!todo.completed
    //                 console.log('Inside')
    //             }
    //             //console.log(todo)
    //             return todo
    //         })
    //         return{
    //         todos:updatedTodos
    //         }
    //     })
    // }

    handlechange=(todo)=>{
        const todos=[...this.state.todos]
        const index=todos.indexOf(todo)
        todos[index]={...todo}
        if(todos[index].id==todo.id){
            todos[index].completed=!todo.completed
        }
        console.log(todo)
        this.setState({todos})
    }
    


    render(){
        const todoItems=this.state.todos.map(items => <TodoItem key={items.id} item={items} handlechange
        ={this.handlechange}/>)
        return(
            <div className='todo-list'>
                {todoItems}
            </div>
        )
    }
}

export default Todo;