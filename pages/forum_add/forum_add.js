import{request} from "../../request/myrequest.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    content:"",
    keyword:""
  },

  formSubmit: function(e){
    if(e.detail.value.content.length == 0 || 
      e.detail.value.label.length ==0 ){
        wx.lin.showToast({
          title: '字段不能为空',
          icon: 'error'
        })
    }else{
      request({
        url: '/addforum',
        method: "POST",
        data: {
          name:this.data.name,
          content:e.detail.value.content,
          keyword:e.detail.value.label
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(result=>{
        wx.navigateBack({
          delta: 1  //小程序关闭当前页面返回上一页面
        });
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const user = wx.getStorageSync('LoginUser');
    if(!user){
      wx.reLaunch({
        url: '/pages/index/index',
      });
    }else{
      this.setData({
        name:user.name
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