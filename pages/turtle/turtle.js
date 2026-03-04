// pages/turtle/turtle.js
const turtleSoup = require('../../data/turtleSoup.js')

Page({
  data: {
    puzzle: null,
    answerVisible: false
  },

  onLoad() {
    this.pickPuzzle()
  },

  pickPuzzle() {
    const { puzzles } = turtleSoup
    const idx = Math.floor(Math.random() * puzzles.length)
    this.setData({
      puzzle: puzzles[idx],
      answerVisible: false
    })
  },

  onNext() {
    this.pickPuzzle()
    wx.vibrateShort({ type: 'light' })
  },

  onToggleAnswer() {
    this.setData({ answerVisible: !this.data.answerVisible })
  }
})
