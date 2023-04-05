const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Crea una ventana del navegador.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Carga el archivo index.html de la aplicación.
  win.loadFile('index.html')
}

// Cuando la aplicación esté lista, crea la ventana.
app.whenReady().then(createWindow)
