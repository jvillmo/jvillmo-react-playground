import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import "./styles.css";

import App from "./components/App";
import Counter from "./components/Counter";

const rootElement = document.getElementById("root");

const initialState = { count: 1000 };
const store = configureStore(null, initialState);

class root extends React.Component {
  state = { counterCounter: 0 };

  handleSuperClick = e => {
    console.log("Este es EL super click", e);
    this.setState({
      counterCounter: this.state.counterCounter + 1
    });

    //Llamar a un action XXX sin ser un componente connected
    store.dispatch({ type: `INCREMENT` });
  };

  render() {
    return (
      <Provider store={store}>
        <App
          store={store}
          {...this.props}
          counter={this.state.counterCounter}
          nombre="Jorge 1"
          superClick={this.handleSuperClick}
        >
          <div> para que no digan que no hay nada en medio </div>
          ---- [hiJO{" "}
          <Counter {...this.props} counter={this.state.counterCounter} /> ]
        </App>
      </Provider>
    );
  }
}
const MyRoot = root;

ReactDOM.render(<MyRoot paraEntenderCualesProsp="VEA" />, rootElement);
