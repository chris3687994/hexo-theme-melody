window.Theme = {

  // 获取保存的主题模式
  getMode() {
    return localStorage.getItem('theme') || 'auto'
  },

  // 获取系统主题
  getSystemTheme() {
    return window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches ? 'dark' : 'light'
  },

  // 获取最终主题
  getTheme(mode = this.getMode()) {

    return mode === 'auto'
      ? this.getSystemTheme()
      : mode

  },

  // 切换主题
  set(mode) {

    localStorage.setItem(
      'theme',
      mode
    )

    const theme = this.getTheme(mode)

    // 修改网页主题
    document.documentElement.dataset.theme =
      theme

    // 同步 Giscus
    if (
      window.GiscusTheme &&
      typeof window.GiscusTheme.update === 'function'
    ) {

      window.GiscusTheme.update()

    }

  }

}

