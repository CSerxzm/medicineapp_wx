export const request=(params)=>{
  const baseurl="http://47.102.155.48:8080/medicineapp";
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
    })
  })
}