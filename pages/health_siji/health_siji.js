import{request} from "../../request/health.js";
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
    sijiList:[],
    index:0,
    page:{
      pageIndex:1,
      totalSize:""
    }
  },
  get_items(index){
    request({
      url: '/getheathbytype',
      data:{
        main_type:1,
        sub_type:this.data.index,
        pageIndex:this.data.page.pageIndex
      }
    })
    .then(result=>{
      this.setData({
        sijiList:[...this.data.sijiList,...result.data.data],
        /*页码相关*/
        page:result.data.page,
      });
    })
  },

  handleItemChange(e){
    const index=e.detail.index;
    this.setData({
      page:{
        pageIndex:1,
        totalSize:""
      },
      sijiList:[],
      index:index,
    });
    this.get_items(index);
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
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