import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "normalize.css"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { registerIcon } from "./plugin/registerIcon"
import { globalConfig } from "./utils/appConfig"
import "./plugin/progress"


import router from './router'
import pinia from './store'
import BaiduMap from 'vue-baidu-map-3x'

import "./permissions"

const app = createApp(App)

registerIcon(app)
globalConfig(app)
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.use(pinia)
app.use(BaiduMap, {
    ak: 'OGvra4LQfISKnfSV8zfbfiRBXvtKFGm4',
});
app.mount('#app')
