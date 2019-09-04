import React from "react";
import Counter from "./Counter";
import ConnectedCounter from "./ConnectedCounter";

class App extends React.Component {
  state = { nombre: "a" };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      nombre: props.nombre
    };
  }

  render() {
    console.log("app props", this.props);
    console.log("state", this.state);

    console.log("store passed as prop", this.props.store);
    const reduxState = this.props.store.getState();

    console.log("Redux Stade", reduxState);

    const { children } = this.props;

    return (
      <>
        <button
          onClick={e => {
            this.setState({ nombre: "yo" });
            //SI NO SE USA PERSIST DARIA WARNING
            e.persist();
            this.props.superClick(e);
          }}
        >
          click
        </button>
        <h1>
          {this.state.nombre} WAS HERE {this.props.counter}
        </h1>

        <Counter {...this.props} />

        <ConnectedCounter />
        {children}
      </>
    );
  }
}

export default App;
