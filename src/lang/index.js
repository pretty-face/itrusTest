/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 17:42:16 
 * @Last Modified by:   LiPengCheng 
 * @Last Modified time: 2018-05-30 17:42:16 
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  //英文
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  //中文
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  // 设置默认语言
  locale: 'zh',
  messages
})

export default i18n
