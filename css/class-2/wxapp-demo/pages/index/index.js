//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    list: [{ name: '边框样式', id: 0, url: '../css/border/border'}]
  },
  //事件处理函数
  catchtap: function(e) {
    let data = e.target.dataset
    wx.navigateTo({
      url:data.url 
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})
