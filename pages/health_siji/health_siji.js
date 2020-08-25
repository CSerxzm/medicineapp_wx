
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"春季",
        isActive:true
      },
      {
        id:1,
        name:"夏季",
        isActive:false
      },
      {
        id:2,
        name:"秋季",
        isActive:false
      },
      {
        id:2,
        name:"冬季",
        isActive:false
      },
    ],
    sijiList:[
      {
        id:"0",
        image:"http://47.102.155.48:8080/pic_medicineapp/yu.jpg",
        editTime:"2018/12/12 12:23:23",
        title:"冬季羊肉可以养生吗,可以不可以，有你决定啊，想吃就吃",
        views:100
      },
      {
        id:"1",
        image:"http://47.102.155.48:8080/pic_medicineapp/yu.jpg",
        editTime:"2018/12/12 12:23:23",
        title:"冬季羊肉可以养生吗",
        views:100
      },
      {
        id:"2",
        image:"http://47.102.155.48:8080/pic_medicineapp/yu.jpg",
        editTime:"2018/12/12 12:23:23",
        title:"冬季羊肉可以养生吗",
        views:100
      },
      {
        id:"3",
        image:"http://47.102.155.48:8080/pic_medicineapp/yu.jpg",
        editTime:"2018/12/12 12:23:23",
        title:"冬季羊肉可以养生吗",
        views:100
      }
    ]
  },

  handleItemChange(e){
    //console.log(e.detail.index);
    const index=e.detail.index;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
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