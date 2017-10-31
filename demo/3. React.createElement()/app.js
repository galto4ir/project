class Hi extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello ${this.props.name}`);
  }
}

ReactDOM.render(
    React.createElement(Hi, {name: "Galt"}, null),
    document.getElementById("root")
);