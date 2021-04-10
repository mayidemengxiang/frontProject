export default function request(options){
  wx.showLoading({
    title: '加载中...',
    mask: true
  });
  return new Promise((resolve, reject)=>{
    wx.request({
      ...options,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        wx.hideLoading();
      }
    });
  })
}