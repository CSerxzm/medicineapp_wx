import{request} from "../../request/myrequest.js";
Page({

  data: {
    name:"",
    oldPass:"",
    newPass:"",
    againNewPass:"",
    /*校验规则*/
    passwordRules: [
      {type: 'email',message:"无效的密码格式"},
      {required: true,message:"密码为必填项"}
    ]
  },

  oldPassInput :function (e) { 
    this.setData({ 
    oldPass:e.detail.value 
    });
  }, 

  newPassInput :function (e) { 
    this.setData({ 
    newPass:e.detail.value 
    });
  }, 
  againNewPassInput :function (e) {
    this.setData({
    againNewPass:e.detail.value 
    });
  },

  onLoad: function (options) {
    const user = wx.getStorageSync('LoginUser');
    this.setData({
      name:user.name
    });
  },

  updateuser:function(){
    var that = this;
    if(that.data.newPass!=that.data.againNewPass){
      wx.showToast({ 
        title: '两次密码不一致', 
        icon: 'loading', 
        duration: 1000 
      });
      return;
    }
    request({
      url: '/updateuserpass',
      data: {
        name:that.data.name,
        password:that.data.newPass,
        oldPass:that.data.oldPass,
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
    });
  }

})