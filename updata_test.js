function getTest(tableID) {
  var Product = new wx.BaaS.TableObject(tableID)
  var query = new wx.BaaS.Query()
  query.compare('amount', '>', 0)

  Product.setQuery(query).limit(10).offset(0).find().then((res) => {
    // success
    console.log("获取到试题："+res.data)
  }, (err) => {
    // err
  })
}

// module.exports.getTest = getTest
exports.getTest = getTest
