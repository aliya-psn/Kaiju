// pages/decide/decide.js
const decideData = require('../../data/decide.js')

Page({
  data: {
    presets: decideData.presets,
    currentPreset: '',
    result: null
  },

  onLoad() {
    this.setData({
      currentPreset: this.data.presets[0].name
    })
  },

  onPresetTap(e) {
    this.setData({
      currentPreset: e.currentTarget.dataset.name,
      result: null
    })
  },

  onPick() {
    const preset = this.data.presets.find(p => p.name === this.data.currentPreset)
    if (!preset) return
    const idx = Math.floor(Math.random() * preset.options.length)
    this.setData({ result: preset.options[idx] })
    wx.vibrateShort({ type: 'light' })
  }
})
