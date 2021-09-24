import React from 'react';
import SlideShow from "./SlideShow"
import MainButton from "./MainButton"

const MainComponent = {
    height: "calc(100vh - 104px)",
    textAlign: "center"
}

const VacuumCleanerState = {
    height: "47px",
    padding: "10px",
    fontSize: "36px",
    textAlign: "center"
}

const VacuumCleanerButton = {
    height: "20vw",
    padding: "calc((100vh - 294px - 20vw)/2)"
}

const Space = {
    height: "47px",
    padding: "10px"
}

const ChooseState = {
    fontSize: "24px",
    height: "36px",
    padding: "10px"
}

const RoundTransparentButton = {
    border: "none",
    borderRadius: "100%",
    outline: "none",
    background: "transparent",
    cursor: "pointer"  
}

class Main extends React.Component {
    constructor(props) {
        super(props)
    }




    render() {
        if (this.props.PlayButton) {
            return (
                <div style={MainComponent}>
                    <div style={VacuumCleanerState} className="Blink">
                        {this.props.text.toUpperCase()}
                    </div>
                    <div style={VacuumCleanerButton}>
                        <button style={RoundTransparentButton} onClick={() => {this.props.PlayPause()}}>
                            <MainButton mode={this.props.PlayButton}/>
                        </button>
                    </div>
                    <div style={ChooseState}>
                        <SlideShow UpdateText={this.props.UpdateText} text={this.props.text}/>
                    </div>
                    <div style={Space}>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div style={MainComponent}>
                    <div style={VacuumCleanerState}>
                        {this.props.text}
                    </div>
                    <div style={VacuumCleanerButton}>
                        <button style={RoundTransparentButton} onClick={() => {this.props.PlayPause()}}>
                            <MainButton mode={this.props.PlayButton}/>
                        </button>
                    </div>
                    <div style={ChooseState}>
                        <SlideShow UpdateText={this.props.UpdateText} text={this.props.text}/>
                    </div>
                    <div style={Space}>
                    </div>
                </div>
            );
        }
    }
}

export default Main