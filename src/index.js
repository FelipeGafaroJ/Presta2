const {createWindow} = require ('./main')
const { app } = require('electron')

// Cuando la aplicación esté lista, crea la ventana.
app.whenReady().then(createWindow)
