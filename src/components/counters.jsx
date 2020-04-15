import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  handleDelete = (counterId) => {
    let counters = this.state.counters.filter((c) => c.id !== counterId);
    // const index=counters.indexOf(counter);
    // counters[index]={...counter};
    this.setState({ counters });
  };
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
