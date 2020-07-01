// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchResults:[],
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

  },
  shouldDone: function (event) {
    var searchkey = event.detail.value;
    var that = this;
    that.setData({
      searchResults: [
        {
          "playtimes":"666",
          "length":"888"
        },
        {
          "playtimes":"666",
          "length":"888"
        }
      ]
    })
  },

  didSelectCell: function (event) {
    
  }
})