import electron, { app, BrowserWindow } from 'electron'

const isDevelopment = process.env.NODE_ENV !== 'production'

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    let url = isDevelopment
        ? 'http://localhost:9080'
        : `file://${__dirname}/index.html`

    // Open the DevTools.
    if (isDevelopment) mainWindow.webContents.openDevTools()

    mainWindow.loadURL(url)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
