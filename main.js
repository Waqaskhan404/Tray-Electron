const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const Menu=electron.Menu
const Tray=electron.Tray
const iconPath=path.join(__dirname,"th.jpeg")


let tray=null
let win;



app.on('ready', function(){
  tray=new Tray(iconPath)
  const template=[
    {
      label:"Audio",
      submenu:[
        {
          label:"Low",
          type:"radio",
          check:true
        },
        {
          label:"High",
          type:"radio",
        },
      ]
      ,

    },
    {
      label:"Video",
      submenu:[
        {
          label:"1280x720",
          type:"radio",
          check:true
        },
        {
          label:"1920x1080",
          type:"radio",
        },
      ]
      ,
      
    },
  
  ]
  const ctxMenu=Menu.buildFromTemplate(template)
  tray.setContextMenu(ctxMenu)
  tray.setToolTip("This is tray app")


});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
  }
});