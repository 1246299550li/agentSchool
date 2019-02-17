//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        background: "../../images/bgone1.jpg",
        isShow: true,
        userName: null
    },
    bindKeyInput: function(e) {
        this.setData({
            userName: e.detail.value
        })
        app.globalData.userName = this.data.userName;
        console.log(app.globalData.userName);
    },
    start: function() {
        if (this.data.userName == null) {
            wx.showToast({
                title: '请输入代号',
                image: '../../images/warning.png',
                duration: 800,
                mask: true
            })
            return;
        }
        this.setData({
            isShow: false,
            background: "../../images/loading.jpg"
        })
        wx.showToast({
            title: 'loading',
            duration: 1500,
            icon: 'loading',
            mask: true
        })
        setTimeout(function() {
            wx.navigateTo({
                url: '../pre/pre'
            })
        }, 1300)

    }
})