import{request} from "../../request/myrequest.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"中药材科普",
        isActive:true
      },
      {
        id:1,
        name:"中药方科普",
        isActive:false
      },
      {
        id:2,
        name:"中医药辟谣",
        isActive:false
      },
    ],
    itemsList:[],
    urllist:[
      "/getmedicines",
      "/getprescrs",
      "/getrumors",
    ],
    index:0,
    page:{
      pageIndex:1,
      totalSize:""
    }
  },

  get_items(index){
    request({
      url: this.data.urllist[index],
      data:{
        pageIndex:this.data.page.pageIndex
      }
    })
    .then(result=>{
        this.setData({
          itemsList:[...this.data.itemsList,...result.data.data],
          /*页码相关*/
          page:result.data.page,
        });
    });
  },

  handleItemChange(e){
    var index = e.detail.index;
    this.setData({
      page:{
        pageIndex:1,
        totalSize:""
      },
      itemsList:[],
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
    this.get_items(this.data.index);
  },

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