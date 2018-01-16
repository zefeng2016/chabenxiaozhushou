//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    countDate: 0,
    hours:0,
    min:0
  },

  //事件处理函数
  onLoad: function () {
   
  var now = new Date();  
    var urodz = new Date("3/17/2018 00:00:00");//设定倒计时的时间  

    now.setTime(now.getTime() + 250);
    var days = (urodz - now) / 1000 / 60 / 60 / 24;
    var daysRound = Math.floor(days);
    var hours = (urodz - now) / 1000 / 60 / 60 - (24 * daysRound);
    var hoursRound = Math.floor(hours);
    var minutes = (urodz - now) / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
    var minutesRound = Math.floor(minutes);
    // var seconds = (urodz - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    // var secondsRound = Math.round(seconds);



    console.log('tianshu: ' + daysRound)

    this.setData({
        countDate : daysRound,
        hours:hoursRound,
        min:minutesRound
    })

  }
})
