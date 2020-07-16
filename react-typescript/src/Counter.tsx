import * as React from 'react';
import Count from './Count';

interface Props{}

interface State {
  count: number
}

export default class Counter extends React.Component<Props, State> {
    state: State = {
        count: 0
    }
    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        })
    }
    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        })
    }

    render(){
        return (
            <div style={{'textAlign': 'center'}}>
                <Count count={this.state.count} />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}