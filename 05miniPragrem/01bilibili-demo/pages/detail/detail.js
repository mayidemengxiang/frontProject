import * as httpMethod from "../../utils/http/index";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    videoInfo: null,  //视频详情
    otherList: [],   //其它视频列表
    commentData: null   //评论信息
  },

  //获取视频信息
  getVideoInfo(){
    httpMethod.get({
      url: "http://mock-api.com/mnEe4VnJ.mock/videoDetail?id=" + this.id
    }).then(res=>{
      if (res.code === 0) {
        this.setData({
          videoInfo: res.data.videoInfo
        });
      }
    })
  },
  //获取其它视频信息
  getOtherVideoList(){
    httpMethod.get({
      url: "http://mock-api.com/mnEe4VnJ.mock/otherList?id=" + this.id
    }).then((res)=>{
      if (res.code === 0) {
        this.setData({
          otherList: res.data.otherList
        });
      }
    });
  },
  //获取评论列表信息
  getCommentList(){
    httpMethod.get({
      url: "http://mock-api.com/mnEe4VnJ.mock/commentList?id=" + this.id
    }).then((res)=>{
      if (res.code === 0) {
        this.setData({
          commentData: res.data.commentData
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    });
    this.getVideoInfo();
    this.getOtherVideoList();
    this.getCommentList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})