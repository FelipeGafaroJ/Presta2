const { app, BrowserWindow } = require('electron')


const { getConnection } = require("./database");

function hello(){
  console.log('hi world')
}





function createWindow () {
  // Crea una ventana del navegador.
  let win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Carga el archivo index.html de la aplicación.
  win.loadFile('src/views/index.html')
}

module.exports ={
  createWindow,
  hello
}


