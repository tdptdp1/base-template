// 引入 Vue 和 SvgIcon
import type { App } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

// 定义全局组件类型
const allGlobalComponents: Record<string, any> = {
  SvgIcon
}

export default {
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((key) => {
      // 使用 app.component 来注册组件
      app.component(key, allGlobalComponents[key])
    })
  }
}
