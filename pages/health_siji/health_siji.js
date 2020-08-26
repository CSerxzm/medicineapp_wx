import{request} from "../../request/health.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"春季",
        isActive:true
      },
      {
        id:1,
        name:"夏季",
        isActive:false
      },
      {
        id:2,
        name:"秋季",
        isActive:false
      },
      {
        id:2,
        name:"冬季",
        isActive:false
      },
    ],
    sijiList:[],
    index:0
  },
  get_items(index){
    request({
      url: '/getheathbytype',
      data:{
        main_type:1,
        sub_type:index
      }
    })
    .then(result=>{
      this.setData({
        sijiList:result.data
      });
      console.log(result);
    })
  },

  handleItemChange(e){
    const index=e.detail.index;
    this.get_items(index);
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_items(0);
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