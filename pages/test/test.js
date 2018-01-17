// pages/test/test.js
var upadta_test = require('../updata_test.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: 0,
    content: 'N/A',
    items: [
      { name: 'A', value: 'N/A' },
      { name: 'B', value: 'N/A' },
      { name: 'C', value: 'N/A' },
      { name: 'D', value: 'N/A' },
    ],
    trueSelect: 'A',
    nextBtnDisplay: false,
    answerDisplay: false,
    isDisabled: false,
    trueNum: 0,
    errorNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载") 
    let tableNum = 22549
    upadta_test.getTest(tableNum)
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
    console.log("页面加载")
    let tableNum = 22549
    upadta_test.getTest(tableNum)
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
    if (e.detail.value.toString() === this.data.trueSelect) {
      var adTrueNum = this.data.trueNum+1
      this.setData({
        isDisabled: true,
        trueNum: adTrueNum
      })
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

