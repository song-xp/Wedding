//index.js
//获取应用实例
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()

Page({
  data: {
    bgi: "../../images/bg_1.png",
    src: "../../images/avatar.png",
    logo: "../../images/tel.png",
    wedding: "../../images/wedding.png",
    word: "我们诚邀您来参加我们的婚礼",
    time: "时间：2019年1月28日",
    place: "地点：长沙市岳麓区XX路XX酒店",
    gif: "../../images/save_the_date.gif",
    music_icon: "../../images/music_icon.png",
    music_play: "../../images/music_play.png",
    tape: "",
    tool: "",
    status: 0
  },
  onReady: function (e) {
    this.innerAudioContext = wx.createInnerAudioContext()
    this.innerAudioContext.autoplay = false
    this.innerAudioContext.loop = true
    this.innerAudioContext.src = "https://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3"
    this.innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  play: function(e){
    if (this.data.status==0){
      this.innerAudioContext.play()
      this.setData({
        tape: "playIcon",
        tool: "playImg",
        status: 1
        })
      this.innerAudioContext.play()
    }else{
      this.innerAudioContext.pause()
      this.setData({
         tape: "",
         tool: "pauseImg",
         status: 0
        })
      this.innerAudioContext.pause()
    }
  }
})
