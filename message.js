const ipcMain = require('electron').ipcMain;

module.exports.messageGo = (win) => {
    ipcMain.on('notice', (e, msg) => {
      switch (msg) {
        case 'dididi':
          win.webContents.send('dududu','******')
          break
        default:
          break
      }
    })
}