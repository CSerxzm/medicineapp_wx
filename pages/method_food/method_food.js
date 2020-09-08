import{request} from "../../request/health.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    foodList:[],
    index:0,
    page:{
      pageIndex:1,
      totalSize:""
    }
  },
  get_items(index){
    request({
      url: '/getfoods',
      data:{
        pageIndex:this.data.page.pageIndex
      },
    })
    .then(result=>{
      this.setData({
        foodList:[...this.data.foodList,...result.data.data],
        /*页码相关*/
        page:result.data.page,
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_items(0);
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.page.pageIndex>=this.data.page.totalSize){
      //没有下一页数据
      console.log("没有下一页");
    }else{
      //console.log("有下一页");
      this.data.page.pageIndex++;
      this.get_items(this.data.index);
    }
  }
})