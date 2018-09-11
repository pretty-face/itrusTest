/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 17:41:35 
 * @Last Modified by:   LiPengCheng 
 * @Last Modified time: 2018-05-30 17:41:35 
 */
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  const translatedTitle = this.$t('route.' + title) 

  if (hasKey) {
    return translatedTitle
  }
  return title
}
