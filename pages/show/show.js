// index.js
// 获取应用实例

const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    stu:{
      'door':"石牌校区西门",
      'xuehao':"20182131198",
      'name':"吕尼格",
      'danwei':"计算机学院",
      'phone':"18003020372",
      'dom':"东十九栋503",
      'date':"",
      'date2':"",
    },
    info:[],
  },
  onLoad(){
    const value=wx.getStorageSync('stu')
    console.log(value)
    if(value=="")
    {
      wx.showModal({
        showCancel:false,
        title: '请先填写信息',
        success (res) {
          if (res.confirm) {
         wx.navigateBack({
           delta: 0,
         })
          }
        }
      })
    }
    else{
      var timestamp = Date.parse(
        new Date());
        var date = 
        new Date(timestamp);
        var D = date.getDate()
        var M = (date.getMonth())+1
    
    let time2=M+'月'+D+'日'
    const logs = wx.getStorageSync('info') || []
    let temp_info=logs

    let door='stu.door';
    let xuehao='stu.xuehao';
    let name='stu.name';
    let dom='stu.dom';
    let danwei='stu.danwei';
    let phone='stu.phone';
    let date='stu.date'
    let date2='stu.date2'
    this.setData({  
      [door]:value.door,
      [xuehao]:value.xuehao,
      [name]:value.name,
      [dom]:value.dom,
      [danwei]:value.danwei,
      [phone]:value.phone,
      [date]:    util.formatTime(new Date()),
      [date2]: time2
    })
    temp_info.push(this.data.stu)
    this.setData({
      info:temp_info
    })
    wx.setStorageSync('info', this.data.info)
    }
  },
  ClearStroage:function(){
    wx.showModal({
      title: '清除',
      content: '确定要清空所有信息？',
      success (res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'info',
            success (res) {
              wx.navigateBack({
                delta: 0,
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
 
  }
})
