import{request} from "../../request/health.js";
const app = getApp();
Page({
    data: {
      tabs:[
          {id:0,name:"立春",isActive:true},{id:1,name:"雨水",isActive:false},{id:2,name:"惊蛰",isActive:false},{id:3,name:"春分",isActive:false},{id:4,name:"清明",isActive:false},
          {id:5,name:"谷雨",isActive:false},{id:6,name:"立夏",isActive:false},{id:7,name:"小满",isActive:false},{id:8,name:"芒种",isActive:false},{id:9,name:"夏至",isActive:false},
          {id:10,name:"小暑",isActive:false},{id:11,name:"大暑",isActive:false},{id:12,name:"立秋",isActive:false},{id:13,name:"处暑",isActive:false},{id:14,name:"白露",isActive:false},
          {id:15,name:"秋分",isActive:false},{id:16,name:"寒露",isActive:false},{id:17,name:"霜降",isActive:false},{id:18,name:"立冬",isActive:false},{id:19,name:"小雪",isActive:false},
          {id:20,name:"大雪",isActive:false},{id:21,name:"冬至",isActive:false},{id:22,name:"小寒",isActive:false},{id:23,name:"大寒",isActive:false}
        ],
        currentTab: 0,
        navScrollLeft: 0,
        jiqiList:"",
        page:{
            pageIndex:1,
            totalSize:""
        }
    },
    get_items(index){
        request({
          url: '/getheathbytype',
          data:{
            main_type:0,
            sub_type:this.data.currentTab,
            pageIndex:this.data.page.pageIndex
          },
        })
        .then(result=>{
          this.setData({
            jiqiList:[...this.data.jiqiList,...result.data.data],
            /*页码相关*/
            page:result.data.page,
          });
        });
    },
    //事件处理函数
    onLoad: function () {
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    pixelRatio: res.pixelRatio,
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            },
        })  ;
        this.get_items(this.data.currentTab);     
    },
    switchNav(event){
        var cur = event.currentTarget.dataset.current; 
        console.log(cur);
        var singleNavWidth = this.data.windowWidth / 5;                  
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth,
            page:{
                pageIndex:1,
                totalSize:""
              },
            jiqiList:[],
        })      
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
        this.get_items(this.data.currentTab);
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
        this.get_items(this.data.currentTab);
        }
    }

})