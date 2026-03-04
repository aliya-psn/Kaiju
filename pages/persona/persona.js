// pages/persona/persona.js
const personaData = require('../../data/persona.js')

Page({
  data: { result: null },

  onDraw() {
    const ai = Math.floor(Math.random() * personaData.avatars.length)
    const pi = Math.floor(Math.random() * personaData.personas.length)
    this.setData({
      result: {
        avatar: personaData.avatars[ai],
        text: personaData.personas[pi]
      }
    })
    wx.vibrateShort({ type: 'light' })
  }
})
