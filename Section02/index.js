const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    // basic BrowserWindows
    // new BrowserWindow({});

    mainWindow = new BrowserWindow({webPreferences: { nodeIntegration: true, contextIsolation: false },});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

});

ipcMain.on('video:submit', (event, path) => {
    // ffmpeg.ffprobe(path, (err, metadata) => {
    //     mainWindow.webContents.send('video:metadata', metadata.format.duration);        
    // });
});

ipcMain.on('mine', (event) => {
    let duration = 'You clicked me!';
    mainWindow.webContents.send('mineMain', duration);
    console.log('test');
});





