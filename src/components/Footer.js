import React from 'react';

const MainComponent = {
    background: "lightyellow",
    height: "32px",
    padding: "10px",
    fontSize: "24px",
    textAlign: "center"
}

class Footer extends React.Component {
    render() {
      return (
          <div style={MainComponent}>
              Осталось свободного места в пылесборнике: 235/500 мл.
          </div>
      );
    }
}

export default Footer