import React, { Component } from 'react'
import Count from './Count'

class Counts extends Component {
    render() { 
        return ( 
        <div>
            <button onClick={this.props.onReset} 
            className='btn btn-primary btn-sm m-2'>Reset
            </button>
            {this.props.counters.map(counter => 
            <Count key={counter.id} 
            counter={counter} 
            onDelete={this.props.onDelete} 
            onIncrement={this.props.onIncrement}
            />)}
        </div>
         );
    }
}
 
export default Counts;