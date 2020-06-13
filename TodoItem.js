import React from 'react'

function HandingEvent(){
    console.log('The state of the checkbox was changed')
}

function TodoItem(props){
    const styles={
        fontStyle:'italic',
        color:'#cdcdcd',
        textDecoration:'line-through'
    }

    return(
        <div className='todo-item'>
            <input type='checkbox' checked={props.item.completed} onChange={() => props.handlechange(props.item) }></input>
            <p style={props.item.completed? styles:null}>{props.item.text}</p>
        </div>
    )
}


export default TodoItem;