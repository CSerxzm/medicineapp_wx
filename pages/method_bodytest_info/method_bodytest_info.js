import{request} from "../../request/myrequest.js";
Page({
  data: {
    testList:[],
    type:""
  },
  get_items(){
    var that = this;
    request({
      url: '/getquestion',
      data:{
        type:that.data.type
      },
    })
    .then(result=>{
      this.setData({
        testList:result.data
      });
    });
  },
  radioChange(e){
    var index = e.target.id;
    var select = e.detail.value;
    var temp_str='testList['+index+'].answer';
    this.setData({
      [temp_str]:select
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      type:options.type
    });
    this.get_items();
  },

  postquestion:function(){
    var arr = new Array();
    for ( var i = 0; i <this.data.testList.length; i++){
      var temp = this.data.testList[i];
      if( !(/^\d+$/.test(temp.answer)) ){
        wx.lin.showToast({
          title: '有选项未选择！',
          icon: 'error'
        });
        return;
      }
      arr.push({'value':temp.answer,'type':temp.type});
    }
    var app = getApp();
    const user = wx.getStorageSync('LoginUser');
    wx.request({
      url: app.globalData.BASEURL+'/postquestion',  
      method: 'post',  
      data: {
        answerList:JSON.stringify(arr),
        name:user.name
      },
      success: function (res) { 
        wx.lin.showDialog({
          type:"alert",
          title:"测试结果",
          content:res.data.type,
          success: (res) => {
            wx.redirectTo({
              url: "/pages/method_bodytest/method_bodytest"
            });
          }
        });
      }  
  }); 
  }
})