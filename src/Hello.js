import React from 'react'

class Hello extends React.Component {
  state = {
    show: true
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    if (this.state.show) {
      return (
        <div>
          <h1>Hello {this.props.mytext}</h1>
          <button onClick={this.toggleShow}>cambiar estado</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>NO elements</h1>
          <button onClick={this.toggleShow}>cambiar estado</button>
        </div>
      );
    }
  }
}
export default Hello;