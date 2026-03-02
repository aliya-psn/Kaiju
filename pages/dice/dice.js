// pages/dice/dice.js
Page({
  data: {
    covered: true,
    diceValues: [1, 1],
    shaking: false
  },

  onLoad() {
    // 初始随机骰子
    this.rollDice()
  },

  rollDice() {
    const diceValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ]
    this.setData({ diceValues })
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
