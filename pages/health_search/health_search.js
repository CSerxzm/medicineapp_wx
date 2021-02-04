// pages/search/search.js
import{request} from "../../request/myrequest.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:"",
    itemsList:[],
    page:{
      pageIndex:1,
      totalSize:""
    }
  },

  valueChange: function(e){
    this.setData({
      searchValue:e.detail.value
    });
    //获得相关的数据
    request({
      url: '/searchmedicines',
      data:{
        name:this.data.searchValue,
        pageIndex:this.data.page.pageIndex
      },
    })
    .then(result=>{
      this.setData({
        itemsList:[...this.data.itemsList,...result.data.data],
        /*页码相关*/
        page:result.data.page,
      });
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