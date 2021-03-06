import React from 'react';

const MainComponent = {
    height: "32px",
    fontSize: "24px",
    textAlign: "center"
}

class Battery extends React.Component {
    render() {
        if (this.props.battery < 25) {
            return(
                <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="32"
                height="32"
                viewBox="0 0 265 265"
                >
                <path fill="none" d="M-1 -1H270.749V270.749H-1z"></path>
                <g>
                    <path fill="red" d="M57.342 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                    <path d="M260.75 98.708h-19.434c-.32 0-.635.018-.946.05v-24.37a9 9 0 00-9-9H9a9 9 0 00-9 9v120.974a9 9 0 009 9h222.37a9 9 0 009-9v-24.37c.311.033.626.05.946.05h19.434a9 9 0 009-9v-54.335a9 9 0 00-9-8.999zm-38.38 87.654H18V83.388h204.37v102.974zm29.38-33.32h-10.434c-.32 0-.635.018-.946.05v-36.436c.311.033.626.05.946.05h10.434v36.336z"></path>
                </g>
            </svg>
            );
        }
        else if (this.props.battery < 50) {
            return(
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    viewBox="0 0 265 265"
                >
                    <path fill="none" d="M-1 -1H270.749V270.749H-1z"></path>
                    <g>
                        <path fill="#ff9f00" d="M57.341 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path fill="#ff9f00" d="M99.237 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path d="M260.749 98.707h-19.433c-.32 0-.635.018-.947.05v-24.37a9 9 0 00-9-9H9a9 9 0 00-9 9v120.974a9 9 0 009 9h222.369a9 9 0 009-9v-24.37c.311.033.627.05.947.05h19.433a9 9 0 009-9v-54.335a9 9 0 00-9-8.999zm-38.38 87.654H18V83.388h204.369v102.973zm29.38-33.319h-10.433c-.32 0-.635.018-.947.05v-36.436c.311.033.627.05.947.05h10.433v36.336z"></path>
                    </g>
                </svg>
            );
        }
        else if (this.props.battery < 75) {
            return(
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    viewBox="0 0 265 265"
                >
                    <path fill="none" d="M-1 -1H270.749V270.749H-1z"></path>
                    <g>
                        <path fill="#c6f500" d="M57.341 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path fill="#c6f500" d="M99.237 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path fill="#c6f500" d="M141.132 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path d="M260.749 98.707h-19.433c-.32 0-.635.018-.947.05v-24.37a9 9 0 00-9-9H9a9 9 0 00-9 9v120.974a9 9 0 009 9h222.369a9 9 0 009-9v-24.37c.311.033.627.05.947.05h19.433a9 9 0 009-9v-54.335a9 9 0 00-9-8.999zm-38.38 87.654H18V83.388h204.369v102.973zm29.38-33.319h-10.433c-.32 0-.635.018-.947.05v-36.436c.311.033.627.05.947.05h10.433v36.336z"></path>
                    </g>
                </svg>
            );
        }
        else if (this.props.battery <=100) {
            return(
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                    viewBox="0 0 265 265"
                >
                    <path fill="none" d="M-1 -1H581V401H-1z"></path>
                    <g>
                        <path fill="#0acf00" d="M57.341 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path fill="#0acf00" d="M99.237 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path fill="#0acf00" d="M141.132 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path fill="#0acf00" d="M183.028 171.042a9 9 0 009-9v-54.335c0-4.971-4.029-9-9-9s-9 4.029-9 9v54.335a9 9 0 009 9z"></path>
                        <path d="M260.749 98.707h-19.433c-.32 0-.635.018-.947.05v-24.37a9 9 0 00-9-9H9a9 9 0 00-9 9v120.974a9 9 0 009 9h222.369a9 9 0 009-9v-24.37c.311.033.627.05.947.05h19.433a9 9 0 009-9v-54.335a9 9 0 00-9-8.999zm-38.38 87.654H18V83.388h204.369v102.973zm29.38-33.319h-10.433c-.32 0-.635.018-.947.05v-36.436c.311.033.627.05.947.05h10.433v36.336z"></path>
                    </g>
                </svg>
            );
        }
    }
}

export default Battery