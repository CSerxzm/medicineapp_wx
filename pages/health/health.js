// pages/health/health.js
import{request} from "../../request/health.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    menus:[
      {
        "name":"节气养生",
        "src":'http://47.102.155.48:8080/pic_medicineapp/jiqi.png',
        "url":"/pages/health_jiqi/health_jiqi"
      },
      {
        "name":"四季养生",
        "src":'http://47.102.155.48:8080/pic_medicineapp/siji.png',
        "url":"/pages/health_siji/health_siji"
      },
      {
        "name":"人群养生",
        "src":'http://47.102.155.48:8080/pic_medicineapp/renqun.png',
        "url":"/pages/health_renqun/health_renqun"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*  获得轮播图数据 */
    this.getSwiperList();

  },

  getSwiperList(){
    request({url:"/getimages"})
    .then(result=>{
      this.setData({
        swiperList:result.data.message
      });
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})