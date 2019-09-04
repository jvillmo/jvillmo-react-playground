import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return <span>{this.props.counter}</span>;
  }
}

const mapStateToProps = ({ counter }) => {
  return { counter };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ConnectedDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

export default ConnectedDisplay;
