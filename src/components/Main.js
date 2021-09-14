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

        this.state = {PlayButton: false}
        this.state = {text: "тихая уборка"}

        this.PlayPause = this.PlayPause.bind(this)
        this.UpdateText = this.UpdateText.bind(this)

    }


    UpdateText(value) {
        this.setState({ text: value });
    }

    PlayPause() {
        if (this.state.PlayButton) {
            this.setState({ PlayButton: false });
        }
        else {
            this.setState({ PlayButton: true });
        }
    }
    render() {
        if (this.state.PlayButton) {
            return (
                <div style={MainComponent}>
                    <div style={VacuumCleanerState} className="Blink">
                        {this.state.text.toUpperCase()}
                    </div>
                    <div style={VacuumCleanerButton}>
                        <button style={RoundTransparentButton} onClick={this.PlayPause}>
                            <MainButton mode={this.state.PlayButton}/>
                        </button>
                    </div>
                    <div style={ChooseState}>
                        <SlideShow UpdateText={this.UpdateText} text={this.state.text}/>
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
                        ВЫКЛЮЧЕН
                    </div>
                    <div style={VacuumCleanerButton}>
                        <button style={RoundTransparentButton} onClick={this.PlayPause}>
                            <MainButton mode={this.state.PlayButton}/>
                        </button>
                    </div>
                    <div style={ChooseState}>
                        <SlideShow UpdateText={this.UpdateText} text={this.state.text}/>
                    </div>
                    <div style={Space}>
                    </div>
                </div>
            );
        }
    }
}

export default Main