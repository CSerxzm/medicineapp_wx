import{request} from "../../request/myrequest.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forumList:[],
    index:"",
    page:{
      pageIndex:1,
      totalSize:""
    }
  },
  get_items(index){
    request({
      url: "/getforums",
      data:{
        pageIndex:this.data.page.pageIndex
      }
    })
    .then(result=>{
      console.log(result);
      this.setData({
        forumList:[...this.data.forumList,...result.data.data],
        /*页码相关*/
        page:result.data.page,
      });
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({forumList:[],index:"",page:{
      pageIndex:1,
      totalSize:""
    }});
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