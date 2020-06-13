import React, { Component } from 'react'
import Counts from './Counts'


class NavBar extends Component{
    render(){
        return(
        <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand' href>NavBar </a>
        <span className='badge badge-pill badge-secondary'>
            {this.props.total}</span>'

      </nav>
        )
    }
}


export default class FinalCounter extends Component {
    state={
        counters:[
            {
                id:1,
                value:4
            },
            {
                id:2,
                value:0
            },
            {
                id:3,
                value:0
            },
            {
                id:4,
                value:2
            }
        ]
    }

    handleIncrement=(counter)=>{
        //we are cloning the entire original counters array
        const counters=[...this.state.counters]
        // this is identify the index of the input argment
        const index=counters.indexOf(counter)
        // here we are cloning the counter which is passed as the argument to the function
        counters[index]={...counter}
        counters[index].value++
        this.setState({counters})
        console.log(this.state.counters[index])
         
    }



    handleDelete=(counterId)=>{
        const something=this.state.counters.filter(c =>c.id !== counterId);
        this.setState({counters:something})
    }

    handleReset=()=>{
        const variable=this.state.counters.map(count =>{
            count.value=0
            return count
        })
        this.setState({counters:variable})
    }

    
    
    
    render() {
        return (
    <div>      
        <NavBar total={this.state.counters.filter(
            c => c.value>0).length} />
        <main className='container'>
        <Counts onReset={this.handleReset} 
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        counters={this.state.counters}/>
        </main>
    </div>
                
            
        )
    }
}
