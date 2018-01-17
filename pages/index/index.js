//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    countDate: 0,
    content:'时间是一切财富中最宝贵的财富富中最宝贵的财富富中最宝贵的财富。',
    author:'德奥弗拉斯多',
    allCheckNum:0,
    perCheckNum:0,
  },
  //事件处理函数
  onLoad: function () {
    //获取倒计时时间
    var now = new Date();
    var urodz = new Date("3/17/2018 00:00:00");//设定倒计时的时间  
    now.setTime(now.getTime() + 250);
    var days = (urodz - now) / 1000 / 60 / 60 / 24;
    var daysRound = Math.floor(days);
   
    this.setData({
      countDate: daysRound,
    })

    //获取每日一签
    let tableID = 22478
    let recordID = '5a5eaed108443e253891191c'
    let Product = new wx.BaaS.TableObject(tableID)
    Product.get(recordID).then((res) => {
      // success
     
      this.setData({
        content: res.data.content,
        author: res.data.author
      })
     


    }, (err) => {
      // err
    })
  },
  startCheck: function (event) {
    
    wx.navigateTo({
      url: '/pages/test/test',
    })
    
  }
})
