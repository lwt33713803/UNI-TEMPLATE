/**
 * 加载动画
 * @param tips 提示语句
 * @returns 关闭loading
 */
export const showLoading = (tips: string = '加载中...'): (() => null) => {
    uni.showLoading({
      title: tips,
      mask: true,
    })
    uni.showNavigationBarLoading()
    return () => {
      uni.hideLoading()
      uni.hideNavigationBarLoading()
      return null
    }
  }
