// pages/personal_info/personal_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:"",
    image:"",
    sex:1,
    phone:"",
    email:"",
    constellation:""
  },
handleSexChange({ detail = {} }) {
  this.setData({
      sex:detail.value
  });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const user = wx.getStorageSync('LoginUser');
    this.setData({
      user
    });
    this.setData({
      image:user.image,
      sex:user.sex,
      phone:user.phone,
      email:user.email,
      constellation:user.constellation
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  imageClick:function(){
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        var uid = that.data.uid
        wx.uploadFile({
          url: 'http://localhost:8080/upload',
          filePath: tempFilePaths[0],
          name: 'file',
          success: function (res) {
            console.log(res.data);
            const image = res.data;
            that.setData({
              image
            });
          }
        })
      }
    })
  },
  updateuser:function(){
    console.log(123);
    request({
      url: '/login',
      data: {
        
      }
    })
    .then(result=>{
      if(result.data){
        wx.showToast({ 
          title: '登录成功', 
          icon: 'success', 
          duration: 1000 
        });
        console.log(result.data);
        wx.setStorageSync('LoginUser', result.data)
        wx.switchTab({
          url: "/pages/health_index/health_index"
        });
      }else{
        wx.showToast({ 
          title: '用户名密码错误', 
          icon: 'loading', 
          duration: 1000 
        }) 
      }
    })
  }
})