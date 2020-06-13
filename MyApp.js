import React from 'react'
import ReactDOM from 'react-dom'

class Appy extends React.Component{
    constructor (){
        super()
        this.state={
            answer:'Yes',
            name:'Akash',
            age:21
        }
    }

    render(){
        return (
            <div>
                <Header username='Akash' />
                <p>Is the state important to know <b>{this.state.answer}</b></p>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old</h1>
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return(
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }
}


class Application extends React.Component{
    constructor() {
        super()
        this.state={
            login:false
        }
    }

    render(){
        let display
            if(this.state.login){
                display='in'
            } else {
                display='out'
            }
        return (
            <div>
                <h1>You are currently logged {display}</h1> 
            </div>
        )
    }
}


class Apps extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
       //this.ChangeCount=this.ChangeCount.bind(this)
       this.ChangeCount=()=>this.setState({count:this.state.count+1})
    
    }

    // ChangeCount() {
    //     this.setState(prevState => {
    //         return {
    //             count:prevState.count+1
    //         }
    //     })
    // }
    



    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onMouseOver={this.ChangeCount}> Change</button>
            </div>
        )
    }
}


class Example extends React.Component{
    constructor(){
        super()
        this.state={
            isLogged:true
        }
        this.ChangeValue=()=>this.setState({isLogged:!this.state.isLogged})
    }

    render(){
        console.log(this.state.isLogged)
        let display
        if(this.state.isLogged){
            display='in'
        } else {
            display='out'
        }
        return(
            <div>
                <h1> Logged {display}</h1>
        <button onClick={this.ChangeValue}>{this.state.isLogged?"Log Out":"Log In"}</button>
            </div>
        )
        }
    }

    class FormsEx extends React.Component{
        constructor(){
            super()
            this.state={
                firstName:'',
                lastName:'',
                isFriendly:true
            }
            this.handleChange=this.handleChange.bind(this)
        }

        handleChange(event){
            const {name,value,type,checked}=event.target
            type==='checkbox'? this.setState({ [name]:checked}):this.setState({[name]:value})
        }


        render(){
            return(
                <form>
                    <input type='text' name='firstName' placeholder='First Name' onChange={this.handleChange}></input>
                    <br />
                    <input type='text' name='lastname' placeholder='Last Name' onChange={this.handleChange}></input>
                    <br />
                    <textarea />
                    <br />
                    <label><input type='checkbox' name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange} />Is Friendly </label>
                    <h3>{this.state.firstName} {this.state.lastname}</h3>
                </form>
            )
        }
    }



export default FormsEx;



