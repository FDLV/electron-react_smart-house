import React from 'react';

const MainComponent = {
    display: "flex",
    justifyContent: "center",
    height: "36px"
}

const ButtonNoneStyle = {
    border: "none",
    outline: "none",
    background: "transparent",
    cursor: "pointer"   
}

const StatesVacuumCleaner = {
    width: "30vw",
    minWidth: "230px"
}

class SlideShow extends React.Component {
    constructor(props) {
        super(props)
        this.onClickRightButton = this.onClickRightButton.bind(this)
        this.onClickLeftButton = this.onClickLeftButton.bind(this)
    }

    onClickLeftButton() {
        let self = this
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV")
        if (this.props.SlideShowText === "Тихая уборка") {
            this.props.UpdateSlideShowText("Зарядка")
        }
        else if (this.props.SlideShowText === "Стандартная уборка") {
            this.props.UpdateSlideShowText("Тихая уборка")
        }
        else if (this.props.SlideShowText === "Интенсивная уборка") {
            self.props.UpdateSlideShowText("Стандартная уборка")
        }
        else if (this.props.SlideShowText === "Зарядка") {
            this.props.UpdateSlideShowText("Интенсивная уборка")
        }
    }

    onClickRightButton() {
        if (this.props.SlideShowText === "Тихая уборка") {
            this.props.UpdateSlideShowText("Стандартная уборка")
        }
        else if (this.props.SlideShowText === "Стандартная уборка") {
            this.props.UpdateSlideShowText("Интенсивная уборка")
        }
        else if (this.props.SlideShowText === "Интенсивная уборка") {
            this.props.UpdateSlideShowText("Зарядка")
        }
        else if (this.props.SlideShowText === "Зарядка") {
            this.props.UpdateSlideShowText("Тихая уборка")
        }
    }
    
    render() {
        return (
            <div style={MainComponent}>
                <button style = {ButtonNoneStyle} onClick={() => {this.onClickLeftButton()}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <path d="M366.326 2.877c-16.847-6.426-35.491-1.883-47.497 11.572L128.884 227.314c-14.592 16.353-14.592 41.019.001 57.372l189.944 212.865c8.386 9.399 20.012 14.448 32.004 14.448 5.172 0 10.415-.938 15.493-2.874 16.847-6.425 27.734-22.227 27.734-40.259V43.135c0-18.031-10.885-33.833-27.734-40.258zm7.335 465.989c0 11.524-7.543 18.505-14.603 21.197-7.058 2.688-17.337 2.506-25.009-6.094L144.105 271.103c-7.684-8.61-7.684-21.597-.001-30.207L334.049 28.032c7.673-8.597 17.951-8.785 25.009-6.093 7.059 2.692 14.603 9.674 14.603 21.196v425.731z"></path>
                    <path d="M284.866 378.748l-4.669-5.234c-3.749-4.201-10.197-4.571-14.402-.82-4.202 3.752-4.571 10.199-.82 14.402l4.67 5.234a10.178 10.178 0 007.615 3.409c2.415 0 4.842-.854 6.787-2.589 4.202-3.752 4.57-10.199.819-14.402zM256.731 347.219l-85.937-96.307c-3.75-4.202-10.197-4.571-14.401-.819-4.202 3.75-4.57 10.198-.819 14.401l85.937 96.307a10.176 10.176 0 007.614 3.409c2.415 0 4.842-.854 6.787-2.59 4.202-3.75 4.57-10.198.819-14.401z"></path>
                </svg>
                </button>

                <div style={StatesVacuumCleaner}>
                {this.props.SlideShowText}
                </div>   

                <button style = {ButtonNoneStyle} onClick={this.onClickRightButton}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <path d="M383.117 227.314L193.17 14.45C181.165.994 162.523-3.548 145.674 2.877c-16.848 6.424-27.734 22.227-27.734 40.258v425.732c0 18.031 10.886 33.833 27.734 40.258a43.449 43.449 0 0015.494 2.876c11.991 0 23.618-5.05 32.004-14.448l189.946-212.866c14.591-16.354 14.591-41.019-.001-57.373zm-15.221 43.79L177.951 483.969c-7.672 8.598-17.949 8.784-25.008 6.093-7.059-2.692-14.603-9.674-14.603-21.196V43.135c0-11.523 7.544-18.504 14.603-21.196a23.6 23.6 0 018.341-1.531c5.59 0 11.679 2.035 16.667 7.624l189.945 212.866c7.684 8.609 7.684 21.597 0 30.206z"></path>
                    <path d="M247.026 124.904l-4.669-5.232c-3.752-4.203-10.199-4.571-14.401-.819-4.203 3.752-4.57 10.199-.819 14.401l4.669 5.233a10.172 10.172 0 007.613 3.409c2.416 0 4.843-.854 6.788-2.59 4.203-3.753 4.569-10.2.819-14.402zM356.427 247.507L270.49 151.2c-3.75-4.201-10.199-4.571-14.401-.819-4.203 3.75-4.571 10.198-.82 14.401l85.937 96.307a10.174 10.174 0 007.614 3.409c2.416 0 4.843-.853 6.788-2.59 4.202-3.75 4.57-10.198.819-14.401z"></path>
                </svg>
              </button>
          </div>
      );
    }
}

export default SlideShow