var flag = false
// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true
  }, judge: function (e) {
    if (this.data.show) {
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
    } else {
      this.setData({
        showRes: true
      })
      if (e.target.dataset.num == 3) {
        var cnt = wx.getStorageSync("count")
        wx.setStorageSync("count", parseInt(cnt) + 1)
        this.setData({
          isRight: true
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.src = 'http://ysb.yisell.com/yisell/ybys2018050819052088/sound/yisell_sound_2014042815115825634_88366.wav?from=groupmessage'
        innerAudioContext.play();
      } else {
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.src = 'http://ysc.yisell.com/yisell/ycys2018050819052088/sound/yisell_sound_2014080223201047098_66366.mp3?from=groupmessage'
        innerAudioContext.play();
      }
      var that = this;
      setTimeout(function () {
        that.setData({
          showRes: false
        })
        wx.redirectTo({
          url: './ana6/ana6',
        })
        console.log(111)
      }, 2000)
    }
  },
  hideCover: function () {
    // if (flag) {
    //   wx.redirectTo({
    //     url: './ana6/ana6',
    //   })
    // }
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