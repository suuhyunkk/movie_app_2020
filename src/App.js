import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  }

  add = () => { this.setState(current => ({count: current.count++}))};
  minus = () => { this.setState(current => ({count: current.count--}))};

  render() {
  return (
    <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>plus</button>
        <button onClick={this.minus}>minus</button>
    </div>
  );
  }
}

export default App;
