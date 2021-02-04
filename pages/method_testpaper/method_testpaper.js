import{request} from "../../request/myrequest.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paperList:[],
    index:0,
    page:{
      pageIndex:1,
      totalSize:""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    const user = wx.getStorageSync('LoginUser');
    var that = this;
    wx.request({
      url: app.globalData.BASEURL+'/getpaperbyuser',  
      data: {
        name:user.name,
        pageIndex:that.data.page.pageIndex
      },
      success: function (res) { 
        console.log(res);
        that.setData({
          paperList:[...that.data.paperList,...res.data.data],
          /*页码相关*/
          page:res.data.page,
        });
      }  
  }); 
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
    if(this.data.page.pageIndex>=this.data.page.totalSize){
      //没有下一页数据
      console.log("没有下一页");
    }else{
      //console.log("有下一页");
      this.data.page.pageIndex++;
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})