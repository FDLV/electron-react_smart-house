import React from 'react';

const MainComponent = {
    height: "32px",
    padding: "10px",
    fontSize: "24px",
    textAlign: "center",
    background: "#F2FAFF"
}

class Footer extends React.Component {
    render() {
      return (
          <div style={MainComponent}>
              Осталось свободного места в пылесборнике: {this.props.volume}/500 мл.
          </div>
      );
    }
}

export default Footer