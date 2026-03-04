// pages/index/index.js
Page({
  data: {
    multiGames: [
      { id: 'wordgen', name: '谁是卧底', desc: '词库生成', accent: 'multi-1', icon: 'icon-mask.svg' },
      { id: 'dice', name: '酒筛子', desc: '摇一摇喝一杯', accent: 'multi-2', icon: 'icon-dice.svg' },
      { id: 'turtle', name: '海龟汤', desc: '烧脑推理', accent: 'multi-3', icon: 'icon-turtle.svg' }
    ],
    soloGames: [
      { id: 'fortune', name: '今日一签', desc: '抽个运势', accent: 'solo-1', icon: 'icon-fortune.svg' },
      { id: 'persona', name: '今日人设', desc: '头像+梗', accent: 'solo-2', icon: 'icon-smile.svg' },
      { id: 'decide', name: '选择困难', desc: '随机帮你选', accent: 'solo-3', icon: 'icon-shuffle.svg' }
    ],
  },


  onShareAppMessage() {
    return {
      title: '派对聚会趣味游戏 · 谁是卧底/酒筛子/海龟汤',
      path: '/pages/index/index'
    }
  },

  onShareTap() {
    wx.showToast({ title: '点击右上角分享', icon: 'none' })
  },

  onGameTap(e) {
    const id = e.currentTarget.dataset.id
    const routes = {
      wordgen: '/pages/wordgen/wordgen',
      dice: '/pages/dice/dice',
      turtle: '/pages/turtle/turtle',
      fortune: '/pages/fortune/fortune',
      persona: '/pages/persona/persona',
      decide: '/pages/decide/decide'
    }
    if (routes[id]) {
      wx.navigateTo({ url: routes[id] })
    } else {
      wx.showToast({ title: '敬请期待', icon: 'none' })
    }
  }
})
