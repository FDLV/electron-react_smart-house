import React from 'react';

const MainComponent = {
    background: "lightgreen",
    height: "32px",
    padding: "10px"
}
const LeftHeader = {
    float: "left",
    fontSize: "24px",
    background: "green"
}

const RightHeader = {
    float: "right",
    fontSize: "24px",
    background: "blue"
}

class Main extends React.Component {
    render() {
      return (
          <div style={MainComponent}>
              <div style={LeftHeader}>
                  Робот-пылесос
              </div>
              <div style={RightHeader}>
                  Заряд батареи
              </div>
          </div>
      );
    }
}

export default Main