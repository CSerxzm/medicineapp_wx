import{request} from "../../request/health.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    commentslist:[],
    name:"",
    index:"",
    comment:""
  },

  getComments(index){
    /* 获得内容*/
    request({
      url: "/getforumbyid",
      data:{
        id:index
      }
    })
    .then(result=>{
      this.setData({
        content:result.data
      });
    });
    /*获得评论*/
    request({
      url: "/getcommentsbyforumid",
      data:{
        forum_id:index
      }
    })
    .then(result=>{
      console.log(result);
      this.setData({
        commentslist:result.data
      });
    });

    this.setData({
      index
    })
  },
  /*评论*/
  formSubmit: function(e){
    request({
      url: '/addcomment',
      method: "POST",
      data: {
        name:this.data.name,
        forumId:this.data.index,
        content:e.detail.value.content,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(result=>{
      this.getComments(this.data.index);
      this.setData({
        comment:""
      });
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 
   */
  onLoad: function (options) {
    this.getComments(options.id);
    const username = wx.getStorageSync('LoginUser');
    if(!username){
      wx.reLaunch({
        url: '/pages/index/index',
      });
    }else{
      this.setData({
        name:username
      });
    }
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