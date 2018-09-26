// pages/loading1/loading.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: "../../images/loading2.png"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        wx.showToast({
            title: 'loading',
            duration: 1500,
            icon: 'loading',
            mask: true
        })
        setTimeout(function() {
            wx.navigateTo({
                url: '../problem/problem'
            })
        }, 1500)
    }
})