var _app = getApp()
Page({
  data: {
    user:{"authority":"测试","constellation":"天蝎座",
      "image":"http://localhost:8080/pic_medicineapp/head1.png",
      "name":"root","password":"password"
    }
  },
  /**
   * 跳转到个人用户信息界面
   */
  goToPersonlInfo:function(){
    wx.navigateTo({
      url: '../personal_info/personal_info',
    });
  },
    /**
   * 跳转到更改密码界面
   */
  goToChangePassInfo:function(){
    wx.navigateTo({
      url: '../personal_changepass/personal_changepass',
    });
  },
  onLoad: function (options) {
    const user = wx.getStorageSync('LoginUser');
    if(!user){
      /**带实现,不存在*/
    }else{
      this.setData({
        user:user
      })
    }
  },
  onShow: function () {
    const user = wx.getStorageSync('LoginUser');
    if(!user){
      /**带实现,不存在*/
    }else{
      this.setData({
        user:user
      })
    }
  },
  /*
    到登录界面
  */
 toLogin:function(){
   wx.reLaunch({
    url: '/pages/index/index',
  });
  },
  /*
    清除缓存
  */
 clearCache:function(){
  wx.clearStorageSync();
  wx.showToast({ 
    title: '缓存清理成功', 
    icon: 'success', 
    duration: 1000 
  });
  wx.navigateTo({
    url: '../index/index',
  });
 },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '本草善养APP',
      success: (res) => {
       console.log("转发成功", res);
      },
      fail: (res) => {
       console.log("转发失败", res);
      }
    }
  }
})
