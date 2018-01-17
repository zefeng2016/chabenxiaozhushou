//app.js
App({
  onLaunch: function () {
    require('./sdk-v1.1.4.js')
    
    //初始化SDK
    let clientID = 'ad26874100ee6e06f94d'
    wx.BaaS.init(clientID)


  },
 
  globalData:{
  
  }
})