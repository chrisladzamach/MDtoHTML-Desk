const { app, BrowserWindow } = require('electron')

let mainWindow = null
// When the application is ready, show an window
app.on('ready', () => {
  // This way prevent the elimination of the app when all windows are closed for the garbage collector
  mainWindow = new BrowserWindow()
})