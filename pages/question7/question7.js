var flag = false
// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true
  },
  hideCover: function () {
    if (flag) {
      wx.redirectTo({
        url: './ana7/ana7',
      })
    }
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.opacity(0).step()

    this.setData({
      animationData: animation.export()
    })

    var that = this;

    setTimeout(function () {
      that.setData({
        show: false
      })
    }, 1500)
    flag = true
  },

  showHint: function () {
    console.log(11)
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.opacity(0).step()

    this.setData({
      animationData1: animation.export()
    })
  },

  showContent: function () {
    var animation = wx.createAnimation({
      duration: 1500,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.opacity(1).step()

    this.setData({
      animationData1: animation.export()
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
    this.setData({ show1: true })
  },


})