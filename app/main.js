const { app, BrowserWindow } = require('electron');

let mainWindow = null;
// When the application is ready, show an window
app.on('ready', () => {
  // This way prevent the elimination of the app when all windows are closed for the garbage collector
  mainWindow = new BrowserWindow({
    show: false, // the window don't show until it's ready
    // webPreferences is used to enable Node.js integration and disable context isolation and more options
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration
      contextIsolation: false // Disable context isolation (recommended if using Node.js integration)
    }
  });

  // This line is used to load the index.html file
  mainWindow.loadFile(__dirname +'/index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show(); // Show the window when the files are loaded
    mainWindow.webContents.openDevTools(); // Open the dev tools at the start of the app
  });

  // When the application is closed, the window will be closed too
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});