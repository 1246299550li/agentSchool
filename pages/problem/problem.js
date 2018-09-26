// pages/problem/problem.js
let app = getApp();
Page({
    data: {
        bg: "../../images/start.png",
        background: "../../images/bg.png",
        hitUrl: "../../images/hit.png",
        problem: [{
                bg: '../../images/icon/icon1.png',
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
                solve: "B跟踪者有时会更换衣物，长衫是个好掩护，并且报纸常常用于掩护;A携带行李，行动不便，不可能进行跟踪任务;C跟踪是体力活，不会穿着不利于长时间行走的鞋子。并且跟踪者不会四处张望引人注意.你要去会见的毛石山，实际就是毛泽东同志。毛石山是他1922年前后在湖南领导工人运动时的化名，他组织了领导粤汉铁路工人、安源路矿工人、长沙泥木工人等一系列罢工运动，推动湖南工人运动迅速走向高潮。在此后的革命历程中，毛泽东同志还使用了如李德胜这样的化名，积极投身革命事业，所以在给女儿取名时，为了纪念革命斗争就用李做姓，告诫后人要时刻牢记革命成功来之不易。",
                problemType: 1,
                hit: '跟踪者一般穿便于行动的衣服，携带一些小物件来掩护，也不会有太多动作',
                ans: 'b',
                isReply: false
            },
            {
                bg: '../../images/icon/icon2.png',
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
                solve: "敌比故多了一笔在头上，按地图方位来看，在北方。顾顺章的叛变给我党的地下组织造成了巨大破坏。幸而这个重要情报被打入国民党中统机关任机要秘书的钱壮飞获悉，连夜报告特科负责人李克农，再转报中央。周恩来在陈云（即题目提及的李介生）协助下，采取果断措施，立即安排中央机关和人员安全转移，使国民党反动派将共产党领导人一网打尽的计划落空。",
                problemType: 1,
                hit: '暗语是字谜，观察出现变化的方位',
                ans: 'd',
                isReply: false
            },
            {
                bg: '../../images/icon/icon3.png',
                text: "1935年3月10日晚，中央和军委高级领导人在苟坝研究是否攻打打鼓新场，大家一致认为应该攻打，只有毛委员坚决反对。夜深了，你昏昏欲睡地值班，破译敌人联络信息的电台突然有了收获！敌人发送的这首奇怪的诗里到底藏着什么玄机？",
                items: "打起红腰鼓\n鼓声震天响\n新年辞旧岁\n场圃放炮仗\n有戏唱武松\n伏虎景阳冈",
                solve: "漫漫长征路，情报工作是指路明灯。军委二局的不懈努力和领导人的正确分析，才使得党和红军能一次次摆脱敌人的围追堵截，保存革命火种。打鼓新场改变了原定作战计划，再一次证实了毛泽同同志的正确预见，使得遵义会议后毛泽东同志的领导地位更加稳固，为之后一系列的军事行动奠定了必要的领导基础。",
                problemType: 2,
                hit: '有种诗，叫做藏头诗',
                ans: '打鼓新场有伏',
                isReply: false
            },
            {
                bg: '../../images/icon/icon4.png',
                text: "只要是带兵打仗的将军都知道一个最基本的道理：只有充分了解对手的信息，才可以出奇制胜。所以在二战期间，各个参战国家都建立起自己的情报体系，培养间谍，努力发展无线电，发报机和密电码是战场上传输信息的最主要的工具。为了或缺对方的信息，很多国家都会实施破译，监听等方式来知道对方的军力防御与重要情报。当然二战期间的日军在入侵我国时，对于中国军队也实行了这种监听方式。作为一名特工，你掌握的可靠情报急需传给组织，可是如何避免情报泄露呢？",
                items: [{
                        name: 'a',
                        value: 'A）使用他国语言'
                    },
                    {
                        name: 'b',
                        value: 'B）使用暗语'
                    },
                    {
                        name: 'c',
                        value: 'C）使用我国地方语言'
                    },
                ],
                solve: "传送这些情报的人，是我军特意从云南白族调过来的小兵，我军早就考虑到了我们的情报会被监听破译，所以我们才运用我国方言的优势来困惑敌人，日本人天真以为自己学会了汉语就搞定了，但却没想到中国语言千千万，文化更是博大精深，怎么可能输给日军的小把戏呢？可怜日军耗尽心思培养了那么多“中国通”，但是最后还是被我们的方言打败了！实在是大快人心啊！",
                problemType: 1,
                hit: '情报有可能被监听，可以让敌方在截获情报的情况下看不懂',
                ans: 'c',
                isReply: false
            },
            {
                bg: '../../images/icon/icon5.png',
                text: "1941年7月，刘震率新四军四师十旅抵达安徽蒙城县涡河边的龙亢镇后，突然接到上级电令:”有一位重要同志由延安到苏北，途经你部，必须派可靠部队接送，确保安全。”接此任务后，刘震立即派警卫连前去接送，对连长交代说: “你们去接送一个负责同志，这是情报，沿途要绝对保密和保证安全。连长说: “保证完成任务。”你接到了上级的一封情报，派遣你去执行任务，这个任务是什么呢？",
                items: "去 保 证 \n 护 国 服 \n 装 胡 三",
                solve: "胡服，是刘少奇同志在白区工作时的化名，在之后的其他工作中，胡服也不止一次的被刘少奇同志使用，甚至在当时的中央电报中，都是用胡服来与刘少奇同志传达工作，值得一提的是，少奇两个字也非他的原名，而是用了他的笔名，人们喊的多了自然而然，就改成了刘少奇。",
                problemType: 2,
                hit: '取各边中间有惊喜',
                ans: '保护胡服',
                isReply: false
            },
            {
                bg: '../../images/icon/icon6.png',
                text: "1947年3月中旬的一个星期六，眼看就要下班了，张国疆匆匆交给段伯宇一份秘件电报，说了一句“酌情处理”就先下班走了。段伯宇接过一看，原来电报是国民党三十二军军长打来的，上面写着：“三十二军参谋长王启明叛变，率部5000余人投靠共产党，已派兵追剿，兵力不足，请从速派兵增援。”看完电报后，他知道张国疆把这桩事情推给自己的真正用意了。原来，张国疆是王启明的陆大同学，又是交情甚笃的老朋友，他不情愿亲手签发追剿的命令。这时你作为段柏文的特工队友，应该给他怎样的建议呢？",
                items: [{
                        name: 'a',
                        value: 'A）立即呈报，避免暴露自己特工身份'
                    },
                    {
                        name: 'b',
                        value: 'B）通过电报泄露此次情报，为王启明求助组织援助'
                    },
                    {
                        name: 'c',
                        value: 'C）设法延缓电报，打破请求增援计划'
                    },
                ],
                solve: "这种电报本应立即呈报，因为正好是在星期六下午利用实践的特殊性，借机放在抽屉里，这就晚报了两天，因此顺利掩护了王启明安全到达解放区，同时也避免了暴露身份的危险，任务巧妙完成。",
                problemType: 1,
                hit: '暗语是字谜，观察出现变化的方位',
                ans: 'c',
                isReply: false
            },
        ],
        chooseAns: null,
        nowProblem: 0,
        isShow:true
    },
    start: function () {
        this.setData({
            isShow: false
        })
    },
    bindKeyInput: function(e) {
        this.setData({
            chooseAns: e.detail.value
        })
    },
    radioChange: function(e) {
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
        if (now < 5) {
            now++;
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
                title: '请选择一个答案',
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
            app.globalData.goal++;
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
        console.log(app.globalData.goal);
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
    preventTouchMove: function() {

    },
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