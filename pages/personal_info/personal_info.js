import{request} from "../../request/myrequest.js";
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
    constellation:"",
    /*校验规则*/
    emailRules: [
      {type: 'email',message:"无效的邮件格式"},
      {required: true,message:"邮件为必填项"}
    ],
    constellationRules:[
      {type: 'email',message:"无效的邮件格式"},
      {required: true,message:"星座为必填项"}
    ],
    phoneRules: [
      { min: 8, max: 20, message: '电话长度在8-20个字符之间', trigger: 'blur' },
      { pattern: '^[0-9]+$', message: '电话由数字组成',trigger: 'blur'},
      {required: true,message:"手机为必填项"}
    ]
  },
handleSexChange(e) {
  this.setData({
      sex:e.detail.value
  });
},

emailInput :function (e) { 
  console.log(e);
  this.setData({ 
  email:e.detail.value 
  });
}, 
phoneInput :function (e) {
  this.setData({ 
  phone:e.detail.value 
  });
}, 
constellationInput :function (e) { 
  this.setData({ 
    constellation:e.detail.value 
  });
}, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.initValidateForm(this);
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
          url: 'https://fuyuanplant.cn/medicineapp/upload',
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
    var that = this;
    request({
      url: '/updateuserwithoutpassandauthority',
      data: {
        name:that.data.user.name,
        image:that.data.image,
        sex:that.data.sex,
        phone:that.data.phone,
        email:that.data.email,
        constellation:that.data.constellation
      }
    })
    .then(result=>{
      if(result.data){
        console.log(result.data);
        wx.showToast({ 
          title: '更新成功', 
          icon: 'success', 
          duration: 1000 
        });
        wx.setStorageSync('LoginUser', result.data)
        wx.switchTab({
          url: "/pages/personal_index/personal_index"
        });
      }else{
        wx.showToast({ 
          title: '更新失败', 
          icon: 'loading', 
          duration: 1000 
        }) 
      }
    })
  },
  formValidate: {
    email: [{ required: true, pattern: /^[1-9]{1}\d{2,}$/, message: '请输入100及以上的整数', trigger: "blur" }]
  },
})