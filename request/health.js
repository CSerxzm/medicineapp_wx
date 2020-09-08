export const request=(params)=>{
  const baseurl="https://fuyuanplant.cn/medicineapp";
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