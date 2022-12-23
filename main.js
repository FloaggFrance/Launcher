const { exec } = require('child_process');
const fs = require('fs');

const electron = require('electron');
const app = electron.app;
const ipcMain = electron.ipcMain
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
  	width: 1800, 
  	height: 1200,
  	fullscreen: true,
  	webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadURL(`http://127.0.0.1/templates/steam/`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  })

  mainWindow.setMenu(null)

  mainWindow.webContents.openDevTools();
}

let gameArray = fs.readFileSync('array-game.json');
  //let gameArray = JSON.parse(rawdata);

  console.log(gameArray)

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


ipcMain.handle("console", (event, line) => {
  console.log(`Received from frontend: ${line}`)
  exec(`"${line}"`, (error, stdout, stderr) => {
	  if (error) {
	    console.error(`error: ${error.message}`);
	    return;
	  }

	  if (stderr) {
	    console.error(`stderr: ${stderr}`);
	    return;
	  }

	  console.log(`start "${line}"`);
	});
})

