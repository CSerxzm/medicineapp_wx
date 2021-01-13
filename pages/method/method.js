// pages/method/method.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: false,
    bothside:false,
    bodyimage:["../../img/man.png","../../img/manZ.png","../../img/woman.png","../../img/womanZ.png"],
    body:"../../img/man.png",
    menus:[
      {
        "name":"体制测试",
        "src":'https://fuyuanplant.cn/pic_medicineapp/ceshi.png',
        "url":"/pages/bodytest/bodytest"
      },
      {
        "name":"目标指定",
        "src":'https://fuyuanplant.cn/pic_medicineapp/mubiao.png',
        "url":"/pages/health_siji/health_siji"
      },
      {
        "name":"食物养生",
        "src":'https://fuyuanplant.cn/pic_medicineapp/food.png',
        "url":"/pages/method_food/method_food"
      }
    ],
  },
/**拨动快关 */
onChange(event){
    const detail = event.detail;
    const id = event.currentTarget.id;
    if(id=='sex'){
      this.setData({
        'sex' : detail.value,
      }); 
    }else{
      this.setData({
        'bothside' : detail.value
      }); 
    }
    const index = this.data.sex*2+this.data.bothside;
    this.setData({
      'body':this.data.bodyimage[index]
    }); 
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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