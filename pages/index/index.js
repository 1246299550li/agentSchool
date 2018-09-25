//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        background: "../../images/bgone.png",
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    }
})