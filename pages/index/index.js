// pages/index/index.js
Page({
  data: {
    gameList: [
      {
        id: 'wordgen',
        name: '谁是卧底 · 词库生成',
        desc: '永远玩不腻，每次都有新词',
        color1: '#FF6B9D',
        color2: '#FF9A8B',
        icon: 'icon-mask.svg'
      },
      {
        id: 'dice',
        name: '酒筛子',
        desc: '摇一摇，喝一杯，嗨翻全场',
        color1: '#4CD964',
        color2: '#5AC8FA',
        icon: 'icon-dice.svg'
      },
      {
        id: 'turtle',
        name: '海龟汤',
        desc: '烧脑推理，揭开谜底',
        color1: '#AF52DE',
        color2: '#FF6B9D',
        icon: 'icon-turtle.svg'
      }
    ],
    avatars: [
      { id: 1, file: 'avatar_1.svg', name: '玩家1' },
      { id: 2, file: 'avatar_2.svg', name: '玩家2' },
      { id: 3, file: 'avatar_3.svg', name: '玩家3' },
      { id: 4, file: 'avatar_4.svg', name: '玩家4' },
      { id: 5, file: 'avatar_5.svg', name: '玩家5' },
      { id: 6, file: 'avatar_6.svg', name: '玩家6' },
      { id: 7, file: 'avatar_7.svg', name: '玩家7' },
      { id: 8, file: 'avatar_8.svg', name: '玩家8' }
    ]
  },

  onGameTap(e) {
    const id = e.currentTarget.dataset.id
    if (id === 'wordgen') {
      wx.navigateTo({
        url: '/pages/wordgen/wordgen'
      })
    } else if (id === 'dice') {
      wx.navigateTo({
        url: '/pages/dice/dice'
      })
    } else {
      wx.showToast({
        title: '敬请期待',
        icon: 'none'
      })
    }
  }
})
