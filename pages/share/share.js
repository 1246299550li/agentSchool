// pages/share/share.js
let app = getApp();
Page({

    data: {
        background: "../../images/share.jpg"
    },

    onLoad: function(options) {
    },
    
    onShow: function() {
        this.setData({
            nickname: app.globalData.userName
        })
        wx.showShareMenu({
            withShareTicket: true
        });
        if (app.globalData.goal < 4) {
            this.setData({
                nick: '合格特工\n'
            })
        } else if (app.globalData.goal < 6) {
            this.setData({
                nick: '优秀特工\n'
            })
        } else {
            this.setData({
                nick: '王牌特工\n'
            })
        }
    },
    share: function() {
        console.log("点击转发按钮");
    },
    onShareAppMessage: function() {
        return {
            title: '特工学院',
            desc: '最具人气的小程序!',
            path: '/pages/share/share',
            imageUrl: "../../images/share.jpg",
            success: (res) => {
                console.log("转发成功", res);
            },
            fail: (res) => {
                console.log("转发失败", res);
            }
        }
    }
})