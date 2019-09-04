import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Counter = ({ counter, increment, decrement }) => (
  <>
    <h1>Count: {counter}</h1>
    <button variant="primary" onClick={increment}>
      MÁS
    </button>
    <button variant="primary" onClick={decrement}>
      MENOS
    </button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const mapStateToProps = ({ counter }) => {
  return { counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: `INCREMENT` }),
    decrement: () => dispatch({ type: `DECREMENT` })
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
