import React from "react";
import Battery from "./Battery"

const MainComponent = {
    background: "#D3F0FF",
    height: "32px",
    padding: "10px"
}

const LeftHeader = {
    float: "left",
    fontSize: "24px",
}

const RightHeader = {
    float: "right",
    fontSize: "24px",
    display: "flex"
}

class Header extends React.Component {
    render() {
        return (
            <div style={MainComponent}>
                <div style={LeftHeader}>
                    Робот-пылесос
                </div>
                <div style={RightHeader}>
                    <div>
                        {this.props.battery}%&nbsp;
                    </div>
                    <div>
                        <Battery battery={this.props.battery}/>
                    </div>
                    <div>
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                            enableBackground="new 0 0 423.753 423.753"
                            version="1.1"
                            viewBox="0 0 423.753 423.753"
                            xmlSpace="preserve"
                        >
                            <path fill="#FFE53C" d="M365.873 183.753L73.873 415.753 189.873 231.753 57.873 231.753 341.873 7.753 228.273 183.753z"></path>
                            <path fill="#C39215" d="M73.873 423.753c-2 0-4-.8-5.2-2-2.8-2.8-3.6-6.8-1.6-10.4l108.4-171.6h-117.6c-3.6 0-6.4-2-7.6-5.2s0-6.8 2.8-8.8l284-224c3.2-2.4 7.6-2.4 10.4.4 2.8 2.8 3.6 6.8 1.2 10.4l-105.6 163.2h122.8c3.6 0 6.4 2 7.6 5.2s0 6.8-2.4 8.8l-292 232c-1.6 1.6-3.6 2-5.2 2zm7.2-200h108.8c2.8 0 5.6 1.6 7.2 4 1.6 2.4 1.2 5.6-.4 8l-90.8 144.4 237.2-188.4h-114.8c-2.8 0-5.6-1.6-7.2-4s-1.2-5.6.4-8l87.6-136-228 180z"></path>
                            <g fill="#F8D133">
                                <path d="M109.873 375.753L341.873 191.753 285.873 191.753z"></path>
                                <path d="M313.873 39.753l-128 144h17.2c9.2 0 18-4.8 23.2-12.4l87.6-131.6z"></path>
                            </g>
                        </svg>
                        
                    </div>
                </div>
            </div>
        );
      }
}

export default Header