import{request} from "../../request/myrequest.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testList:[
      { id:1,
        title:"你是不是天天比较开心？",
        answer:[{name:"是",value:1},{name:"不是",value:2}]
      },
      { id:2,
        title:"你是不是天天比较开心？",
        answer:[{name:"你猜猜",value:1},{name:"我不猜",value:2}]
      },
      { id:3,
        title:"你是不是天天比较开心？",
        answer:[{name:"2345",value:1},{name:"你觉得喃",value:2}]
      },
    ],
    index:"",
    page:{
      pageIndex:1,
      totalSize:""
    }
  },
  get_items(){

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.get_items();
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
      this.get_items();
    }
  }
})