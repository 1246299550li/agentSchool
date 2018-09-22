// pages/problem/problem.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: "../../images/bg.png",
        problem: [{
                text: "1922年8月末，你受组织委派，要将一份文书送给毛石山同志，以便工人罢工运动的组织和湖南的革命活动的顺利进行。组织再三告诫你要谨慎行事。 八月的长沙还是很热的，街上人来人往，拥挤而嘈杂，你打算前往事先约定的地点。或许是由于职业的敏感， 你发觉似乎有什么人在盯着自己，你回头一看，捕捉到了三个身影,谁更可能是跟踪者呢？",
                items: [{
                        name: 'a',
                        value: 'A）一个赤膊汉子，皮肤黝黑满身是汗，背着一个大包袱。 (携带行李，行动不便，不可能进行跟踪任务)'
                    },
                    {
                        name: 'b',
                        value: 'B）一个中年男子，穿着一件长衫，靠着墙根读报。（跟踪者有时会更换衣物，长衫是个好掩护，并且报纸常常用于掩护）'
                    },
                    {
                        name: 'c',
                        value: 'C）一个年轻女子，穿着带跟的女式皮鞋，在路口张望.'
                    },
                ],
                hit: '跟踪者一般穿便于行动的衣服，携带一些小物件来掩护，也不会有太多动作',
                ans: 'b',
                isReply: false
            },
            {
                text: "顾顺章被捕叛变，我党在武汉的地下交通机关和红二军团驻武汉办事处暴露，已经有10多名同志被捕牺牲了。有可靠情报显示他打算出卖中共中央在上海的机关和主要领导人！大转移开始.接应你的同志给了你一句暗语“故人变敌人”，又暗示你是钟楼周边的某个地点，接下来你要去哪里？",
                items: [{
                        name: 'a',
                        value: 'A）东边的洋装店'
                    },
                    {
                        name: 'b',
                        value: 'B）南边的熟食店'
                    },
                    {
                        name: 'c',
                        value: 'C）西边的邮局'
                    },
                    {
                        name: 'd',
                        value: 'D）北边的饭馆'
                    },
                ],
                hit: '暗语是字谜，观察出现变化的方位',
                ans: 'd',
                isReply: false
            }
        ],
        chooseAns: null,
        nowProblem: 0
    },
    radioChange: function(e) {
        this.setData({
            chooseAns: e.detail.value
        })
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    showHit: function() {

    },
    sub: function() {
        let nowProblem = this.data.nowProblem;
        console.log(this.data.chooseAns);
        console.log(this.data.problem[nowProblem].isReply);
        if (this.data.problem[nowProblem].isReply == true) {
            wx.showToast({
                title: '您已回答过该问题',
                image: '../../images/warning.png',
                mask: true
            })
            return;
        }
        if (this.data.chooseAns == null) {
            wx.showToast({
                title: '请选择一个答案',
                image: '../../images/warning.png',
                mask: true
            })
        } else if (this.data.chooseAns == this.data.problem[nowProblem].ans) {
            wx.showToast({
                title: '回答正确',
                mask: true
            })
            app.globalData.goal++;
            let problem = this.data.problem;
            problem[nowProblem].isReply = true;
            this.setData({
                problem: problem
            })
        } else {
            wx.showToast({
                title: '回答错误',
                image: '../../images/fail.png',
                mask: true
            })
            let problem = this.data.problem;
            console.log(problem);
            problem[nowProblem].isReply = true;
            this.setData({
                problem: problem
            })
        }

    },
    onLoad: function(options) {

    },

    onShow: function() {

    },
    /**
     * 弹窗
     */
    showDialogBtn: function() {
        this.setData({
            showModal: true
        })
    },
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove: function() {},
    /**
     * 隐藏模态对话框
     */
    hideModal: function() {
        this.setData({
            showModal: false
        });
    },
    /**
     * 对话框取消按钮点击事件
     */
    onCancel: function() {
        this.hideModal();
    },
    /**
     * 对话框确认按钮点击事件
     */
    onConfirm: function() {
        this.hideModal();
    }

})