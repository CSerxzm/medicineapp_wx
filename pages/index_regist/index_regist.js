import{request} from "../../request/myrequest.js";
Page({ 
  data: {
    name: '', 
    password:'',
    passwordagain:"",
    nameRules:[
      { min: 4, max: 8, message: '用户名长度在4-8个字符之间', trigger: 'blur' },
      { pattern: '^[0-9a-zA-Z]+$', message: '用户名由数字大小字母组成',trigger: 'blur'},
      {required: true,message:"用户名为必填项"}
    ],
    passwordRules: [
      { min: 4, max: 8, message: '密码长度在4-8个字符之间', trigger: 'blur' },
      {required: true,message:"密码为必填项"}
    ]
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
  //再次输入密码
  passwordagainInput :function (e) { 
    this.setData({ 
      passwordagain:e.detail.value 
    }) 
  }, 
  
 // 登录 
  regist: function () { 
      var that = this;
      if(this.data.name.length == 0 || this.data.password.length == 0
        || this.data.passwordagain.length == 0){ 
        wx.showToast({ 
          title: '用户名密码为空', 
          icon: 'loading', 
          duration: 500
        }) 
      }else if(this.data.password!=this.data.passwordagain){
        wx.showToast({ 
          title: '输入密码不一致', 
          icon: 'loading', 
          duration: 500 
        }) 
      }else{
          request({
            url: '/registuser',
            data: {
              name:that.data.name,
              password:that.data.password
            }
          })
          .then(result=>{
            console.log(result.data);
            if(result.data){
              wx.showToast({ 
                title: '注册成功', 
                icon: 'success', 
                duration: 1000 
              });
              wx.navigateTo({
                url: '/pages/index/index',
              });
            }else{
              wx.showToast({ 
                title: '用户名已经存在', 
                icon: 'loading', 
                duration: 1000 
              }) 
            }
          })
      } 
  }
 }) 