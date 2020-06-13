import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        console.log('Constructor')
        super()
        this.state={
            counter:0
        }
        
        this.decrement=()=>this.setState({counter:this.state.counter-1})
        this.increment=()=>this.setState({counter:this.state.counter+1})
    }


    componentDidMount(){
        console.log('Component Did Mount')
    }

    

    render() {
        console.log('Render')
        return (
            <div>
                <button onClick={this.increment} className='btn btn-primary'>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <p>Counter : {this.formatCounter()}</p>
            </div>

         );
    }

    formatCounter(){
        const {counter}=this.state
        return counter===0?'Zero':counter
    }

    componentDidUpdate(props,state){
        console.log('Component Did Update')

    }
}
 
export default Counter;
