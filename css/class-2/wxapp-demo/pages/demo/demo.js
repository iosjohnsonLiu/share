// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: '边框样式', id: 0, url: '../css/border/border' },
      { name: '盒子模型', id: 1, url: '../css/box/box' },
      { name: '定位方式', id: 2, url: '../css/position/position' },
      { name: 'flex布局', id: 3, url: '../css/flex/flex' }
    ]
  },
  //事件处理函数
  catchtap: function (e) {
    let data = e.target.dataset
    wx.navigateTo({
      url: data.url
    })
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

  }
})