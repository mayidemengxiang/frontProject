import * as httpMethod from "../../utils/http/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    navList:[],
    swiperList:[],
    videoList:[]
  },
   //获取顶部导航列表
  getNavList(){
    httpMethod.get({
      url:"http://mock-api.com/mnEe4VnJ.mock/navList"
    }).then(res=>{
      if (res.code === 0) {
        this.setData({
          navList : res.data.navList
        });
      }
    });
  },
  //获取轮播图列表
  getSwiperList(){
    httpMethod.get({
      url:"http://mock-api.com/mnEe4VnJ.mock/swiperList"
    }).then(res=>{
      if (res.code === 0) {
        this.setData({
          swiperList : res.data.swiperList
        });
      }
    });
  },
  //获取视频列表
  getVideoList(){
    httpMethod.get({
      url: "http://mock-api.com/mnEe4VnJ.mock/videoList"
    }).then(res=>{
      if (res.code === 0) {
        this.setData({
          videoList : res.data.videoList
        });
      }
    });
  },
  //nav-item点击事件
  selectNavItem(event){
    const index = event.target.dataset.index;
    this.setData({
      currentIndex : index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();   //获得导航栏列表数据
    this.getSwiperList();  //获取轮播图列表
    this.getVideoList();  //获取视频列表
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
    
  }
})