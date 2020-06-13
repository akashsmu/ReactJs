import React, { Component } from 'react'

export default class Converter extends Component {
    constructor(){
        super()
        this.state={
            input:''
        }
        this.inputHandler=this.inputHandler.bind(this)
    }

    decimalToBinary(){
        return Number(this.state.input).toString(2);
    }

    inputHandler(event){
        this.setState({[event.target.name]:event.target.value})
    }


    render() {
        return (
            <div>
                <h1> Decimal Converter</h1>
                <input type='number' name='input' onChange={this.inputHandler}/>
                <p>{this.decimalToBinary()}</p>

            </div>

                
        )
    }
}
