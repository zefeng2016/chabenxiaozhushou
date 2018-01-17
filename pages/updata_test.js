

var testList = []

function getTest(tableID) {

 wx.showLoading({
    title: '加载中',
  })
  if (testList.length == 0) {
    let tableID = 22549
    var Product = new wx.BaaS.TableObject(tableID)
    var query = new wx.BaaS.Query()
    Product.setQuery(query).limit(10).offset(0).find().then((res) => {
      // success
      testList = res.data.objects
      var test = testList.shift()
      console.log(test)
      this.setData({
        trueSelect: test.answer,
        year: test.year,
        content: test.content,
        items: test.selectList

      })
      console.log("test.selectList" + test.selectList[0])
      wx.hideLoading()
    }, (err) => {
      // err

    })
  }
  else {
    var test = testList.shift()
    this.setData({
      year: test.years
    })
  }
}






// module.exports.getTest = getTest
exports.getTest = getTest
