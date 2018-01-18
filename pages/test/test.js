// pages/test/test.js
var upadta_test = require('../updata_test.js')
// var testList = []
var app = getApp()
function getUpTest () {

}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    trueSelect: '',
    nextBtnDisplay: false,
    answerDisplay: false,
    isDisabled: false,
    trueNum: 0,
    errorNum: 0,
    year: 0,
    content: 'N/A',
    cnt:0,
    ansText:''
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("页面加载")
    // let tableNum = 22549
    // var test = upadta_test.getTest(tableNum)
    // console.log('获取到试题'+test)
    // // this.setData({
    // //   year: 125,
    // //   content: test.content,
    // // })
    wx.showLoading({
      title: '加载中',
      
    })
    this.setData({
      nextBtnDisplay: false,
      answerDisplay: false,
      isDisabled: false,
    })
    console.log("panduyan"+app.testList.length)
    if (app.testList.length == 0) {
      let tableID = 22549
      var Product = new wx.BaaS.TableObject(tableID)
      var query = new wx.BaaS.Query()
      Product.setQuery(query).limit(10).offset(0).find().then((res) => {
        // success
        app.testList = res.data.objects
        console.log("1题库还有" + app.testList.length)
        var cunt = this.data.cnt + 1
        this.setData({
          cnt: cunt
        })
        var test = app.testList.shift()
        console.log("本试题内容+" + test)
        console.log("2题库还有" + app.testList.length)
        this.setData({
          trueSelect: test.answer,
          year: test.year,
          content: test.content,
          items: test.selectList,
          isDisabled:false,
          ansText: test.detailedAnswer
        })
       
        wx.hideLoading()
      }, (err) => {
        // err

      })
    }
    else {
      var cunt = this.data.cnt + 1
      this.setData({
        cnt: cunt
      })
      var test = app.testList.shift()
      this.setData({
        trueSelect: test.answer,
        year: test.year,
        content: test.content,
        items: test.selectList,
        isDisabled: false,
        ansText: test.detailedAnswer
      })
      wx.hideLoading()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //点击选项
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var a = 'w'
    switch (e.detail.value) {
      case '0':
        a = 'A'
        break
      case '1':
        a = 'B'
        break
      case '2':
        a = 'C'
        break
      case '3':
        a = 'D'
        break     
    }
    console.log("a:"+a)

    if (a == this.data.trueSelect) {
      var adTrueNum = this.data.trueNum+1
      this.setData({
        isDisabled: true,
        trueNum: adTrueNum
      })
      wx.showLoading({
        title: '加载中',
      })
      this.setData({
        nextBtnDisplay: false,
        answerDisplay: false,
        isDisabled: false,
        
      })
      if (app.testList.length == 0) {
        let tableID = 22549
        var Product = new wx.BaaS.TableObject(tableID)
        var query = new wx.BaaS.Query()
        Product.setQuery(query).limit(10).offset(0).find().then((res) => {
          // success
          app.testList = res.data.objects
          console.log("1题库还有" + app.testList.length)
          var cunt = this.data.cnt + 1
          this.setData({
            cnt:cunt
          })
          var test = app.testList.shift()
          console.log("本试题内容+" + test)
          console.log("2题库还有" + app.testList.length)
          this.setData({
            trueSelect: test.answer,
            year: test.year,
            content: test.content,
            items: test.selectList,
            isDisabled: false,
            ansText: test.detailedAnswer
          })

          wx.hideLoading()
        }, (err) => {
          // err

        })
      }
      else {
        var cunt = this.data.cnt + 1
        this.setData({
          cnt: cunt
        })
        var test = app.testList.shift()
        var that = this;  
        setTimeout(function () {
          that.setData({
            trueSelect: test.answer,
            year: test.year,
            content: test.content,
            items: test.selectList,
            isDisabled: false,
            ansText: test.detailedAnswer
          })
          
        }, 500)
        
      }
      
    }
    else {
      console.log('选错了')
      var adErrorNum = this.data.errorNum + 1
      this.setData({
        nextBtnDisplay: true,
        answerDisplay: true,
        isDisabled: true,
        errorNum: adErrorNum

      })
      console.log(e)

    }
    wx.hideLoading()
  },
  nextBtn:function(){
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      nextBtnDisplay: false,
      answerDisplay: false,
      isDisabled: false,
    })
    if (app.testList.length == 0) {
      let tableID = 22549
      var Product = new wx.BaaS.TableObject(tableID)
      var query = new wx.BaaS.Query()
      Product.setQuery(query).limit(10).offset(0).find().then((res) => {
        // success

        app.testList = res.data.objects
        console.log("1题库还有" + app.testList.length)
        var cunt = this.data.cnt + 1
        this.setData({
          cnt: cunt
        })
        var test = app.testList.shift()
        console.log("本试题内容+"+test)
        console.log("2题库还有" + app.testList.length)
        this.setData({
          trueSelect: test.answer,
          year: test.year,
          content: test.content,
          items: test.selectList,
        ansText: test.detailedAnswer
        })
      
        wx.hideLoading()
      }, (err) => {
        // err

      })
    }
    else {
      console.log("else1题库还有" + app.testList.length)
      var cunt = this.data.cnt + 1
      this.setData({
        cnt: cunt
      })
      var test = app.testList.shift()
      this.setData({
        trueSelect: test.answer,
        year: test.year,
        content: test.content,
        items: test.selectList,
        isDisabled: false,
        ansText: test.detailedAnswer
      })
     
    
      console.log("本试题内容+" + test)
      console.log("2题库还有" + app.testList.length)
    }
    wx.hideLoading()
  },
  errorBtn: function () {
    wx.showModal({
      showCancel: false,
      // title: '',
      content: '感谢你的提交，我们将积极处理。',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
  

})


