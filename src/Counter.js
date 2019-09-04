import React from "react";
import Display from "./Display";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("counter props", this.props);
    return (
      <>
        <div>
          <h1>El contador va por: {this.props.counter}</h1>
        </div>
        <button
          onClick={e => {
            //SI NO SE USA PERSIST DARIA WARNING
            e.persist();
            this.props.superClick(e);
          }}
        >
          click here adentro
        </button>
        dentro de un componente no conected <Display />
      </>
    );
  }
}

export default Counter;
