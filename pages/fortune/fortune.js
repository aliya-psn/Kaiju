// pages/fortune/fortune.js
const fortuneData = require('../../data/fortune.js')

Page({
  data: { fortune: null },

  onDraw() {
    const { fortunes } = fortuneData
    const idx = Math.floor(Math.random() * fortunes.length)
    this.setData({ fortune: fortunes[idx] })
    wx.vibrateShort({ type: 'light' })
  }
})
