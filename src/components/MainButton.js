import React from 'react';

class MainButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {    
            
          }
    }

    ClickPause() {
        let self = this
        self.props.StopTimer()
        self.props.PlayPause()
        self.props.UpdateText("выключен")
        const Pause = function (url, cb) {
            const xhr = new XMLHttpRequest()
            xhr.open(`post`, `http://localhost:5000/state6`)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.setRequestHeader('Access-Control-Allow-Origin', 'dev.rightech.io');
                
            xhr.addEventListener(`load`, cb);

            xhr.send(JSON.stringify({token: localStorage.getItem('token')}))
        }

        Pause(`http://localhost:5000/state6`, function (e) {
            console.log(JSON.parse(e.currentTarget.response))
            console.log("EEEEEEEEEEEEE")
        })
    }

    Play() {
        let self = this

        self.props.PlayPause()
        //взять данные из slideshow

        if (this.props.SlideShowText === "Тихая уборка") {
            this.props.UpdateText("тихая уборка")
            const Pause2 = function (url, cb) {
                const xhr = new XMLHttpRequest()
                xhr.open(`post`, `http://localhost:5000/state1`)
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.setRequestHeader('Access-Control-Allow-Origin', 'dev.rightech.io');
                    
                xhr.addEventListener(`load`, cb);
    
                xhr.send(JSON.stringify({token: localStorage.getItem('token')}))
                //поменять анимацию (типо загрузка или ожидание овтета сервера хз)
            }
    
            Pause2(`http://localhost:5000/state1`, function (e) {
                console.log("ok?????")
                self.props.StartTimer()
                console.log(JSON.parse(e.currentTarget.response))
                console.log("ok!!!!!")
            })
        }
        else if (this.props.SlideShowText === "Стандартная уборка") {

        }
        else if (this.props.SlideShowText === "Интенсивная уборка") {

        }
    }

    render() {
        if (this.props.mode) {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    height="20vw"
                    width="20vw"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    onClick={()=>{this.ClickPause()}}
                >
                    <path d="M437.019 74.98C388.667 26.628 324.381 0 256 0S123.333 26.628 74.982 74.98C26.628 123.333 0 187.62 0 256s26.628 132.667 74.982 181.02C123.333 485.372 187.619 512 256 512s132.667-26.628 181.019-74.98C485.372 388.667 512 324.38 512 256s-26.628-132.667-74.981-181.02zM256 491.602c-129.911 0-235.602-105.69-235.602-235.602S126.089 20.398 256 20.398 491.602 126.089 491.602 256 385.911 491.602 256 491.602z"></path>
                    <path d="M450.364 178.795c-21.665-54.498-65.541-97.656-120.378-118.408-5.269-1.994-11.154.661-13.149 5.929s.66 11.155 5.929 13.149c49.491 18.728 89.089 57.68 108.642 106.866a10.204 10.204 0 009.481 6.434 10.2 10.2 0 003.765-.724c5.234-2.081 7.791-8.012 5.71-13.246zM291.371 49.898A211.003 211.003 0 00256 46.917c-5.632 0-10.199 4.566-10.199 10.199S250.368 67.315 256 67.315a190.7 190.7 0 0131.943 2.691c.58.099 1.157.147 1.726.147 4.88 0 9.194-3.514 10.042-8.486.946-5.554-2.788-10.823-8.34-11.769zM205.581 126.674c-19.525 0-35.41 15.884-35.41 35.409v187.835c0 19.524 15.884 35.409 35.41 35.409 19.524 0 35.409-15.884 35.409-35.409V162.083c0-19.525-15.884-35.409-35.409-35.409zm15.01 223.243c0 8.277-6.734 15.01-15.01 15.01-8.277 0-15.011-6.734-15.011-15.01V162.083c0-8.277 6.735-15.01 15.011-15.01 8.278 0 15.01 6.734 15.01 15.01v187.834zM306.419 126.674c-19.524 0-35.409 15.884-35.409 35.409v187.835c0 19.524 15.884 35.409 35.409 35.409 19.524 0 35.409-15.884 35.41-35.409V162.083c-.001-19.525-15.885-35.409-35.41-35.409zm15.011 223.243c0 8.277-6.734 15.01-15.011 15.01s-15.01-6.734-15.01-15.01V162.083c0-8.277 6.734-15.01 15.01-15.01s15.01 6.734 15.011 15.01v187.834z"></path>
                </svg>
            );
        }
        else {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    height="20vw"
                    width="20vw"
                    enableBackground="new 0 0 502 502"
                    version="1.1"
                    viewBox="0 0 502 502"
                    xmlSpace="preserve"
                    onClick={()=>{this.Play()}}
                >
                    <path d="M251 502c-67.045 0-130.076-26.108-177.483-73.516C26.108 381.076 0 318.044 0 251S26.108 120.924 73.517 73.516C120.924 26.108 183.955 0 251 0s130.076 26.108 177.483 73.516C475.892 120.924 502 183.956 502 251s-26.108 130.076-73.517 177.484C381.076 475.892 318.045 502 251 502zm0-482C123.626 20 20 123.626 20 251s103.626 231 231 231 231-103.626 231-231S378.374 20 251 20z"></path>
                    <path d="M194.134 401a34.732 34.732 0 01-16.204-4.03 34.525 34.525 0 01-18.391-30.567V135.597a34.523 34.523 0 0118.39-30.566 34.523 34.523 0 0135.62 1.93L383.78 222.363A34.56 34.56 0 01398.964 251a34.563 34.563 0 01-15.184 28.637L213.549 395.04a34.465 34.465 0 01-19.415 5.96zm.004-280.005c-2.341 0-4.688.564-6.84 1.706a14.566 14.566 0 00-7.759 12.896v230.806a14.564 14.564 0 007.759 12.896 14.658 14.658 0 006.836 1.701c2.934 0 5.766-.869 8.191-2.514l170.232-115.403c4.011-2.72 6.406-7.236 6.406-12.083s-2.395-9.363-6.406-12.082L202.326 123.515a14.577 14.577 0 00-8.188-2.52zM286.012 63.038c-.574 0-1.156-.049-1.741-.152-21.184-3.718-43.425-3.829-64.641-.324-5.453.903-10.597-2.787-11.496-8.236-.9-5.449 2.787-10.596 8.236-11.496 23.431-3.871 47.965-3.75 71.359.358 5.439.955 9.075 6.139 8.12 11.579-.852 4.854-5.073 8.271-9.837 8.271zM439.844 192.001c-4.08 0-7.911-2.516-9.394-6.57-16.37-44.791-48.719-81.657-91.086-103.808-4.895-2.559-6.788-8.601-4.229-13.495 2.56-4.895 8.601-6.788 13.495-4.229 46.792 24.464 82.521 65.186 100.605 114.666 1.896 5.187-.772 10.929-5.96 12.825a9.977 9.977 0 01-3.431.611z"></path>
                </svg>
            );            
        }
    }   
}

export default MainButton