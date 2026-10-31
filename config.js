/**
 * 个人信息配置文件 —— 只改这里就能自定义网站所有内容
 */
const CONFIG = {
  name: "Li Jingtian",
  birthday: "2008-11-01",     // 出生日期，18岁生日=该日期+18年（按北京时间）

  // 首页文案
  heroTitle: "Welcome to My 18th Chapter",   // 大标题
  heroCheers: "cheers to 18 years",          // 小标题
  heroTagline: "鲜衣怒马少年去，不负韶华行且知", // 倒计时下方的句子

  // ── 各章节景物背景（全新动态配图） ──
  // 来自 Unsplash 高清大图，慢速背景漂移 + JS 动态星野叠加
  scenes: {
    hero:     "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=85", // 群山银河（原壁纸）
    timeline: "images/timeline-bg.jpg", // 成长记录背景（自定义图片）
    photos:   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85", // 地球太空
    about:    "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=1920&q=85", // 深蓝星云
    survey:   "images/survey-bg.jpg", // 旁人寄语背景（自定义图片）
  },

  // ── 成长时间线（detail = 点击卡片后右侧展开的个人叙述） ──
  timeline: [
    { year: "2008", title: "生命之初", desc: "在这个世界上，我开始了我的旅程。",
      detail: `这天我出生了，外面在下雨。雨是什么时候停的，没有人告诉我……

我人生的第一页至今是空白的。可它被讲了太多次，讲到后来，那些别人替我记着的细节，也渐渐变成了我的记忆：一场急雨、一个陌生又熟悉的名字。

后来我才明白，人是从被讲述开始存在的。我记得的很少，替我记着的人很多，我的开头就住在他们身上。

雨比我先来，灯比雨先亮；我睁开眼，一切都已放置妥当。`,
      img: "images/birth.jpg" },
    { year: "2014", title: "小学时光", desc: "背着书包，走进了知识的殿堂。",
      detail: `铃一响，同学一起跑出教室，门口便是操场。没有电子产品，每天很无聊但是很快乐。

那时感觉夏天长得看不见尽头，暑假是最长的，一个人守在电视机前看西游记的场景到了现在也历历在目，十分感触。

“吃完饭再来找你玩”是我们之间最郑重的话，也是我们之间最可贵的诺言，没有人把它写下来，也没有人失过约。

当时并不觉得日子很长，只觉得天不会黑，朋友就在楼下，明天也不用担心。

无忧无虑的感受总带有滞后性。`,
      img: "images/primary-school.jpg" },
    { year: "2017", title: "初中岁月", desc: "青春的序章，友谊的种子在这里发芽。",
      detail: `没人再站到楼道口喊“吃完饭我来找你玩”，大家改在手机上问一句“在吗”。院子白天很空，晚上也空。

那几年我第一次开始在意别人怎么看我。排名每次都会被班主任当着全部人的面念出，后来才知道这是一份上对下的羞辱（有感而发：至于小学的一些老师就更不配为人师表，改一份听写不知道为什么总是喜欢把同学的听写本扔到地上让我们去捡，美其名曰激励同学好好学习，一个小学就开始把人按照成绩划分，我不知道这有什么意义，这只会培养毒瘤，唯利是图的毒瘤），同学之间也学会了用分数说话——多一分是本事，少一分是态度，成绩单把人排成一列，似乎人生会按照这个排名进行下去。

我的话开始变少，喜欢的感觉是什么呢？是走进教室先看那个座位有没有人；是那两分钟里说过的话，回家路上要回想三遍；是作业本上被人多写了一个字，我把那页折了角，一直没舍得平回去。世界没有变大，只是忽然多了一个需要留意的人。我们的开始始于一个雨天，分开却是在一个很普通的晚上。没有说话，也没有谁挽留，我離開后你的世界是否會泛起漣漪。

后来我才懂，那几年学会的不是懂事，是把话咽回去。咽得略早了点，但也没人教过我别的办法。山鸟与鱼不同路，从此山水不相逢。`,
      img: "images/middle-school.jpg" },
    { year: "2020", title: "高中年华", desc: "奋斗的汗水，梦想的翅膀逐渐丰满。",
      detail: `开学第一天，我背着书包站在校门口，觉得“高中”这两个字很大，大到能装下所有还没发生的事。

那时候都感觉高考还很长，长到没人当真。军训把人晒得脱皮，晚上在宿舍聊到熄灯，查寝的脚步一近就全体装睡。第一周我就认识了半班的人，谁也不问成绩，只问你是哪个初中来的。每天都很开心，下了自习还有时间在校园里面闲逛，感觉什么都很新奇。

晚自习前有一段空白：六点刚过，天还没黑透，操场上有风，教室的灯一盏盏亮起来。在操场上或者走廊上，看着渐落的夕阳，感觉一切都很美好。

特朗普竞选、元旦晚会、《琵琶行》、《香雪》、大地理教：它们本来只是几个词，后来各自装走了一段我们。那半年，是我唯一觉得“高中”是个好词的时候。后来两年，我把它过成了别的东西。看着倒计时一天天的减去，不知道是什么感受。压力是具体的。是考完对答案的那十分钟，是题还没做完，眼睛已经花了，脑子里还在算：还差多少分。有时候我会突然害怕——怕自己这么努力，最后只是证明了我不行。

刚过完高一上学期，我以为高中会一直是那个样子。幸福总是有滞后性。也许三年是苦的，但很多年以后，我可能才会发现那是我最像自己的三年。`,
      img: "images/high-school.jpg" },
    { year: "2026", title: "成年之门", desc: "18岁，我准备好了迎接新的世界。",
      detail: `今天又下雨了，我站在窗边看雨落。这样的雨我见过很多次，今天却忽然想起：十八年前的那场雨，我完全不记得，却有人替我记到今天。

原来雨是这样落的——落在今天，也落回从前。`,
      img: "images/18th-birthday.jpg" },
  ],

  // ── 照片墙（caption 即照片名字，显示在照片下方） ──
  photos: [
    { src: "images/gallery/01.jpg", caption: "中考完的晚霞" },
    { src: "images/gallery/02.jpg", caption: "新的一天" },
    { src: "images/gallery/03.jpg", caption: "第一次看海" },
    { src: "images/gallery/04.jpg", caption: "考完去搬砖" },
    { src: "images/gallery/05.jpg", caption: "面馆的小猫" },
    { src: "images/gallery/06.jpg", caption: "A gift" },
    { src: "images/gallery/07.jpg", caption: "一晚伤心的猪脚饭" },
    { src: "images/gallery/08.jpg", caption: "万年不变的剪刀手" },
    { src: "images/gallery/09.jpg", caption: "付老师给的小蛋糕" },
    { src: "images/gallery/10.jpg", caption: "元旦晚会" },
    { src: "images/gallery/11.jpg", caption: "元旦晚会PPT" },
    { src: "images/gallery/12.jpg", caption: "军训" },
    { src: "images/gallery/13.jpg", caption: "十七班" },
    { src: "images/gallery/14.jpg", caption: "喜欢的日落" },
    { src: "images/gallery/15.jpg", caption: "圆梦了" },
    { src: "images/gallery/16.jpg", caption: "夕阳" },
    { src: "images/gallery/17.jpg", caption: "开学第一次吃卤肉饭" },
    { src: "images/gallery/18.jpg", caption: "很喜欢的构图" },
    { src: "images/gallery/19.jpg", caption: "很搞笑的“嚼槟榔的人”" },
    { src: "images/gallery/20.jpg", caption: "最贪吃之人" },
    { src: "images/gallery/21.jpg", caption: "死亡顶光直拍" },
    { src: "images/gallery/22.jpg", caption: "烟花" },
    { src: "images/gallery/23.jpg", caption: "玩到一半锁屏了..." },
    { src: "images/gallery/25.jpg", caption: "至今难忘的卷饼" },
    { src: "images/gallery/26.jpg", caption: "讨厌的荞麦面" },
    { src: "images/gallery/27.jpg", caption: "香雪" },
  ],

  // ── 锦天自白 ──
  bio: `今年十八岁，正在学着把日子过成自己的样子。

喜欢在下午浪费一点时间，喜欢下雨天站在窗边听一会儿，喜欢把走过的路记下来。这里放着我十八年里反复回看的几个年份、几个人，和一场下了很久的雨。

写得不算好，但都是真的。`,
  interests: ["健身", "睡觉", "看风景"],
  contact: { wechat: "Li2024jT", qq: "2816293787", email: "rippleL-08@outlook.com" },

  // ── 旁人寄语（问卷） ──
  surveyQuestions: [
    { id: 1, q: "在你眼中，我是怎样的人",   ph: "请用几个词或一句话描述..." },
    { id: 2, q: "属于我们的难忘瞬间",       ph: "分享一个我们的故事..." },
    { id: 3, q: "赠我一句拾捌岁寄语",       ph: "写下你的祝福..." },
    { id: 4, q: "您的署名",                 ph: "请输入你的昵称" },
  ],
  prizes: ["木雕挂件蓝莓公仔", "纪念币", "胸针", "钥匙扣", "憨豆公仔", "奶糖", "躲猫猫挂件"],

  // ── 旁人寄语接收方式（Web3Forms 免费表单服务） ──
  // 去 https://web3forms.com 用邮箱注册，创建一个表单后拿到 Access Key
  // 把下面引号里的内容替换成你的 Access Key（朋友提交的寄语会发到你的邮箱）
  web3formsKey: "21d25ea0-2e9d-4ff8-8ebc-dc240c0d53bf",

  // ── 每屏底部「下一章」按钮文字 ──
  nextLabels: ["启幕新程", "继续旅程", "轻触拾光", "写下寄语"],
};