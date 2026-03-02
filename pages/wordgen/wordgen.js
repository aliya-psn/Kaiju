// pages/wordgen/wordgen.js
const wordLib = require('../../data/wordLib.js')

Page({
  data: {
    categories: [],
    currentCategory: '',
    wordPair: null,
  },

  onLoad() {
    const categories = wordLib.categories.map(c => ({
      id: c.id,
      name: c.name,
      icon: c.icon
    }))
    this.setData({
      categories,
      currentCategory: categories[0]?.id || ''
    })
  },

  onCategoryTap(e) {
    const id = e.currentTarget.dataset.id
    this.setData({ currentCategory: id })
  },

  onGenerate() {
    const { categories, currentCategory } = this.data
    const category = wordLib.categories.find(c => c.id === currentCategory)
    if (!category || !category.wordPairs || category.wordPairs.length === 0) {
      wx.showToast({ title: '该分类暂无词库', icon: 'none' })
      return
    }
    const pairs = category.wordPairs
    const idx = Math.floor(Math.random() * pairs.length)
    const wordPair = pairs[idx]
    this.setData({ wordPair })
    wx.vibrateShort({ type: 'light' })
  }
})
