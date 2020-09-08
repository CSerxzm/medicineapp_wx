// pages/health/health.js
import{request} from "../../request/health.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    menus:[
      {
        "name":"节气养生",
        "src":'https://fuyuanplant.cn/pic_medicineapp/jiqi.png',
        "url":"/pages/health_jiqi/health_jiqi"
      },
      {
        "name":"四季养生",
        "src":'https://fuyuanplant.cn/pic_medicineapp/siji.png',
        "url":"/pages/health_siji/health_siji"
      },
      {
        "name":"人群养生",
        "src":'https://fuyuanplant.cn/pic_medicineapp/renqun.png',
        "url":"/pages/health_renqun/health_renqun"
      }
    ],
    weather:{
      update: '',
      basic:{},
      today:{},
      todyIcon:'https://fuyuanplant.cn/pic_medicineapp/weather/100.png',
    },
    xinzuo:{
        "date":20200828,
        "name":"狮子座",
        "QFriend":"射手座",
        "color":"黄色",
        "datetime":"2020年08月28日",
        "health":"80",
        "love":"70",
        "work":"80",
        "money":"80",
        "number":7,
        "summary":"今天狮子座别忘了跟你身边的小伙伴联络感情哦，如果有机会一起短途的旅行也会给你带来新的活力。跟伴侣的相处也会给你带来踏实稳定的感觉。",
        "all":"80",
        "resultcode":"200",
        "error_code":0,
        "MeanValue":4
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*  获得轮播图数据 */
    this.getSwiperList();
    var weather = wx.getStorageSync("weather");
    if(!weather){
      this.getLocation();
    }else{
      this.setData({
          weather:weather
      })
      wx.setStorageSync('weather',weather);
    }
  },

  getSwiperList(){
    request({url:"/getimages"})
    .then(result=>{
      this.setData({
        swiperList:result.data.message
      });
    })
  },

  getLocation:function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.getWeatherInfo(latitude, longitude);
      }
    })
  },
  getWeatherInfo: function (latitude, longitude){
    var _this = this;
    var key = 'f574bf1fb2784cacacc7fb15ebca5097';
    var url = 'https://free-api.heweather.com/s6/weather?key='+key+'&location=' + longitude + ',' + latitude;
      wx.request({
        url: url, 
        data: {},
        success: function (res) {
          var daily_forecast_today = res.data.HeWeather6[0].daily_forecast[0];
          var basic = res.data.HeWeather6[0].basic;
          var update = res.data.HeWeather6[0].update.loc;//更新时间
          _this.setData({
            weather:{
              update:update,
              basic:basic,
              today:daily_forecast_today,
              todyIcon:'http://47.102.155.48:8080/pic_medicineapp/weather/' + daily_forecast_today.cond_code_d+'.png'
            }
          });
        }
      })
  }
})