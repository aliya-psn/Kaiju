// pages/dice/dice.js
Page({
  data: {
    covered: true,
    diceValues: [1, 1, 1, 1, 1],
    diceRows: [[1, 1], [1, 1, 1]],
    shaking: false
  },

  onLoad() {
    this.rollDice()
  },

  rollDice() {
    const diceValues = Array(5).fill(0).map(() => Math.floor(Math.random() * 6) + 1)
    const diceRows = [
      diceValues.slice(0, 2),  // 上排2个
      diceValues.slice(2, 5)   // 下排3个
    ]
    this.setData({ diceValues, diceRows })
  },

  onShake() {
    if (!this.data.covered) return
    this.setData({ shaking: true })
    this.rollDice()
    wx.vibrateShort({ type: 'heavy' })
    setTimeout(() => {
      this.setData({ shaking: false })
    }, 500)
  },

  onToggleCover() {
    const { covered } = this.data
    if (covered) {
      this.setData({ covered: false })  // 揭开
    } else {
      this.setData({ covered: true })    // 扣住
    }
  },

})
