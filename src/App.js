import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


const ConnectionError = {
  textAlign: "center",
  height: "85px",
  padding: "20px",
  fontSize: "32px"
}

const ReConnect = {
  height: "calc(100vh - 125px)",
  width: "100vw",
  background: "#F2FAFF",
  cursor: "pointer",
  padding: "0",
  margin: "0",

  border: "none",
  outline: "none"
}

const AuthText = {
  fontSize: "32px",
  height: "32px",
  padding: "10px",
  textAlign: "center",
}

const AuthForm = {
  width: "100%",
  height: "calc(100vh - 52px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const LoginStyle = {
  margin: "25vh 10px 10px 10px",
  width: "300px",
  height: "30px",
  fontSize: "16px"
}

const PasswordStyle = {
  margin: "0 10px 20px 10px",
  width: "300px",
  height: "30px",
  fontSize: "16px"
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {ColorBackground: "red", connection: true, auth: false}

    this.ClickDown = this.ClickDown.bind(this)
    this.ClickUp = this.ClickUp.bind(this)
  }

  Authorisation() {
    const LoadData = function (url, cb) {
      const xhr = new XMLHttpRequest()
      xhr.open(`post`, `http://localhost:5000/`)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      
      let login = document.getElementById("login").value;
      let password = document.getElementById("password").value;

      xhr.addEventListener(`load`, cb);

      xhr.send(JSON.stringify({login: login, password: password}))
    }

    LoadData(`http://localhost:5000/`, function (e) {
      // let token = JSON.parse(e.currentTarget)
      // console.log(token)
    })
  }




  ClickDown() {
    this.setState({ ColorBackground: "orange" });
  }

  ClickUp() {
    this.setState({ ColorBackground: "red" });
  }

  render() {
    if (this.state.auth) {
      if (this.state.connection) {
        return (
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        );
      }
      else {
        return (
          <div>
            <div style={ConnectionError}>
              ОШИБКА СОЕДИНЕНИЯ. НАЖМИТЕ НА КАРТИНКУ, ЧТОБЫ ПЕРЕПОДКЛЮЧИТЬСЯ
            </div>
            <button style={ReConnect} onMouseDown={this.ClickDown} onMouseUp={this.ClickUp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="75vh"
                width="inherit"
                enableBackground="new 0 0 502 502"
                version="1.1"
                viewBox="-250 -200 1400 1400"
                xmlSpace="preserve"
              >
                <path fill="none" d="M-1 -1H581V401H-1z"></path>
                <g>
                  <g fill={this.state.ColorBackground}>
                    <circle cx="385.6" cy="656.1" r="79.8"></circle>
                    <path d="M561.7 401c-15.801-10.3-32.601-19.2-50.2-26.6-39.9-16.9-82.3-25.5-126-25.5-44.601 0-87.9 8.9-128.6 26.6-39.3 17-74.3 41.3-104.1 72.2L253.5 545c34.899-36.1 81.8-56 132-56 49 0 95.1 19.1 129.8 53.8l25.4-25.399L493 469.7l68.7-68.7z"></path>
                    <path d="M385.6 267.1c107.601 0 208.9 41.7 285.3 117.4l98.5-99.5c-50-49.5-108.1-88.4-172.699-115.6-66.9-28.1-138-42.4-211.101-42.4-73.6 0-145 14.4-212.3 42.9C108.3 197.4 50 236.7 0 286.8l99 99c76.5-76.501 178.3-118.7 286.6-118.7z"></path>
                    <path d="M616.8 402.5L549.7 469.599 639.2 559.099 549.7 648.599 616.8 715.7 706.3 626.2 795.8 715.7 862.899 648.599 773.399 559.099 862.899 469.599 795.8 402.5 706.3 492z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>        
        );
      }
    }
    else {
      return (
        <div>
          <div style={AuthText}>
            АВТОРИЗАЦИЯ
          </div>
          <div style={AuthForm}>
            <input id="login" style={LoginStyle} type="text" placeholder="Логин"/>
            <input id="password" style={PasswordStyle} type="password" placeholder="Пароль"/>
            <div className="container">
              <button onClick={()=>{this.Authorisation()}} className="animated-word">ПОДКЛЮЧИТЬСЯ</button>
            </div>            
          </div>          
        </div>
      );
    }
  }
}

export default App;
