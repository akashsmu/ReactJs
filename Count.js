import React, { Component } from 'react';

class Count extends Component {
        render() {
         return (
            <div>
                <span className='btn btn-secondary m-2'>
                    {this.formatCounter()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} 
                className='btn btn-primary m-2'>Increment
                </button>
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className='btn btn-danger'>Delete</button>
                 
            </div>

         );
    }

    formatCounter(){
        const {value}=this.props.counter
        return value===0?'Zero':value
    }

    
}
 
export default Count;
