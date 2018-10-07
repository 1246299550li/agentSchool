// pages/problem/problem.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: "../../images/bg.png",
        hitUrl: "../../images/hit.png",
        problem: [{

                text: "执行任务时要冷静分析:\n下列数据中缺失的数字是：4 、7 、11、18、29、47、（ ）",
                items: '',
                solve: "从第三个数字开始，任意一个数字等于它前面两个数字之和。",
                problemType: 2,
                ans: 'b',
                isReply: false
            },
            {

                text: "执行任务时要随机应变。我的跟踪目标似乎不见了，我应该：",
                items: [{
                        name: 'a',
                        value: 'A）四处走动，四处观望，尽快找到他'
                    },
                    {
                        name: 'b',
                        value: 'B）转动眼球仔细搜索，尽量减少转头'
                    }
                ],
                solve: "执行跟踪时，要注意与目标的距离，保持正常的姿态，避免东张西望暴露自己",
                problemType: 1,
                ans: 'b',
                isReply: false
            },
            {
                bg: '../../images/icon/icon1.png',
                text: "我的跟踪目标频繁地穿越马路，时而折回去走，这说明",
                items: [{
                        name: 'a',
                        value: 'A）糟了，我可能被发现了!我要保持距离改变伪装。'
                    },
                    {
                        name: 'b',
                        value: 'B）他的行为这么怪异一定在四处留暗号，我要再跟紧一点'
                    }
                ],
                solve: "执行跟踪时，同时要注意避免中了目标设置的诡计，时刻要保持自己的行踪不被发现",
                problemType: 1,
                ans: 'a',
                isReply: false
            }
        ],
        chooseAns: null,
        nowProblem: 0
    },
    bindKeyInput: function(e) {
        this.setData({
            chooseAns: e.detail.value
        })
    },
    radioChange: function(e) {
        this.data.problem[this.data.nowProblem].items.forEach(function (res) {
            if (res.name == e.detail.value) {
                res.checked = true;
            }
        })
        this.setData({
            chooseAns: e.detail.value
        })
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    nextProblem: function() {
        let nowProblem = this.data.nowProblem;
        if (this.data.problem[nowProblem].isReply == false) {
            wx.showToast({
                title: '您还未回答此题',
                image: '../../images/warning.png',
                mask: true
            })
            return;
        }
        let now = this.data.nowProblem;
        if (now < 2) {
            now++;
        } else {
            wx.navigateTo({
                url: '../loading/loading'
            })
        }
        this.setData({
            nowProblem: now
        })
    },
    sub: function() {
        let that = this;
        let nowProblem = this.data.nowProblem;
        console.log(this.data.chooseAns);
        console.log(this.data.problem[nowProblem].isReply);
        if (this.data.problem[nowProblem].isReply == true) {
            wx.showToast({
                title: '您已回答过该问题',
                image: '../../images/warning.png',
                duration: 1000,
                mask: true
            })
            return;
        }
        if (this.data.chooseAns == null) {
            wx.showToast({
                title: '请输入答案',
                image: '../../images/warning.png',
                duration: 1000,
                mask: true
            })
        } else if (this.data.chooseAns == this.data.problem[nowProblem].ans) {
            wx.showToast({
                title: '回答正确',
                duration: 1000,
                mask: true
            })
            const innerAudioContext = wx.createInnerAudioContext()
            innerAudioContext.autoplay = true
            innerAudioContext.src = 'http://ysb.yisell.com/yisell/ybys2018050819052088/sound/yisell_sound_2014042815115825634_88366.wav?from=groupmessage'
            innerAudioContext.onPlay(() => {
                console.log('开始播放')
            })
            let problem = this.data.problem;
            problem[nowProblem].isReply = true;
            setTimeout(function() {
                that.setData({
                    problem: problem
                })
            }, 800)
        } else {
            wx.showToast({
                title: '回答错误',
                duration: 1000,
                image: '../../images/fail.png',
                mask: true
            })
            const innerAudioContext = wx.createInnerAudioContext()
            innerAudioContext.autoplay = true
            innerAudioContext.src = 'http://ysc.yisell.com/yisell/ycys2018050819052088/sound/yisell_sound_2014080223201047098_66366.mp3?from=groupmessage'
            innerAudioContext.onPlay(() => {
                console.log('开始播放')
            })
            let problem = this.data.problem;
            console.log(problem);
            problem[nowProblem].isReply = true;
            setTimeout(function() {
                that.setData({
                    problem: problem
                })
            }, 800)
        }
    },
    onLoad: function(options) {

    },

    onShow: function() {

    },

})