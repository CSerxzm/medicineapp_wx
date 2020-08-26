import{request} from "../../request/health.js";
Page({ 
  data: {
    name: '', 
    password:'',
    flag:""
  },

  //记住密码
  radioChange: function(e) {
    this.setData({
      flag:e.detail.value
    })
  },

 // 获取输入账号 
  nameInput:function (e) { 
    this.setData({ 
    name:e.detail.value 
    }) 
  }, 
  
 // 获取输入密码 
  passwordInput :function (e) { 
    this.setData({ 
    password:e.detail.value 
    }) 
  }, 
  
 // 登录 
  login: function () { 
      var that = this;
      if(this.data.name.length == 0 || this.data.password.length == 0){ 
        wx.showToast({ 
          title: '用户名密码为空', 
          icon: 'loading', 
          duration: 1000 
        }) 
      }else {
        request({
          url: '/login',
          data: {
            name:that.data.name,
            password:that.data.password
          }
        })
        .then(result=>{
          if(this.data.flag==true){
              wx.setStorageSync("name",that.data.name);
              wx.setStorageSync("password",that.data.password);
              wx.setStorageSync("flag",that.data.flag);
          }else{
              wx.setStorageSync("name","");
              wx.setStorageSync("password","");
              wx.setStorageSync("flag",false);
          }
          if(result.data){
            wx.showToast({ 
              title: '登录成功', 
              icon: 'success', 
              duration: 1000 
            });
            wx.setStorageSync('LoginUser', that.data.name)
            wx.switchTab({
              url: "/pages/health/health"
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
  },
  onLoad: function (options) {
    const name=wx.getStorageSync("name");
    const password=wx.getStorageSync("password");
    const flag=wx.getStorageSync("flag");
    this.setData({
      name,
      password,
      flag
    });
  }
 }) 