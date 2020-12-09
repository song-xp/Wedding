// pages/place/place.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 28.199435,
    longitude: 112.908428,
    markers: [{
      id: '001',
      latitude: 28.199435,
      longitude: 112.908428,
      iconPath: '../../images/navi.png',
      width: 35,
      height: 35
    }]
  },
  regionChange: function (e) {
    console.log('regionChange被触发，视野发生变化。');
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