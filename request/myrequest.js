export const request=(params)=>{
  var app = getApp();
  const baseurl=app.globalData.BASEURL;
  return new Promise((resolve,reject)=>{
    wx-wx.request({
     ...params,
     url:baseurl+params.url,
     success:(result)=>{
      resolve(result);
     },
     fail:(err)=>{
      reject(err);
     }
    });
  });
}