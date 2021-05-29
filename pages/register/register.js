// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
stu:{
  'door':"",
  'xuehao':"",
  'name':"",
  'danwei':"",
  'phone':"",
  'dom':"",
}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const value=e.detail.value
    let door='stu.door';
    let xuehao='stu.xuehao';
    let name='stu.name';
    let dom='stu.dom';
    let danwei='stu.danwei';
    let phone='stu.phone';
 
    this.setData({
      [door]:value.door,
      [xuehao]:value.xuehao,
      [name]:value.name,
      [dom]:value.dom,
      [danwei]:value.danwei,
      [phone]:value.phone
    })
   
    if(value.door==""||value.xuehao==""||value.name==""||value.danwei==""||value.phone==""||value.dom==""){
      wx.showModal({
        title:"信息不能为空",
      })
    }
    else{
      wx.setStorageSync('stu', this.data.stu)
    wx.showToast({
      title: '提交成功',
      success(res){
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  }
    //wx.setStorageSync('stu', data)
  },
  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)

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