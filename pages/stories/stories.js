// pages/stories/stories.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    stories:[],
    title:'Stories'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
   const page = this;
   console.log("I go first")
  },
  getResult (res){
    console.log(res)
    this.setData({
      stories:res.data
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    const request = {
      url:
        'https://fml.shanghaiwogeng.com/api/v1/stories',
      method: 'GET',
      success: this.getResult
    }
    //  wx.request(request)
    wx.request(request)
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})