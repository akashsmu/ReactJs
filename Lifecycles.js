import React from 'react';
import ReactDom from 'react-dom'

import Counter from './Counter'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      mount:true
    }
    this.mountCounter=()=>this.setState({mount:true})
    this.unmountCounter=()=>this.setState({mount:false})
  }

  render(){
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
        <button onClick={this.unmountCounter}>Unmount</button>
        {this.state.mount?<Counter />:null}

      </div>
  );
}
}



export default App;
