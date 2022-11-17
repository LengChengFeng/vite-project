import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 图标组件
export const registerIcon = (app: any) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}
