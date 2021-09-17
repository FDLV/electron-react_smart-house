// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const axios = require('axios');

const express = require("express");
const appEX = express();
const cors = require("cors");
const { response } = require('express');

appEX.use(cors());
appEX.use(express.json());

//routes

appEX.post("/", async(req, res) => {
      const { login, password } = req.body
      console.log(login)
      console.log(password)
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.post(`https://dev.rightech.io/api/v1/auth/token`, {
        login: login,
        password: password
      }).then(response => {
        console.log(response.data)
        res.send(response)
      }).catch(error => {
        console.log(error)
      res.send(error.message)
    })
})

appEX.listen(5000, () =>{
  console.log("server has started on port 5000");
});


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.