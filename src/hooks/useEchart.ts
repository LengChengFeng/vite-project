import { onMounted, onUnmounted } from "vue";
import { ref } from "vue"
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from "echarts"
function useEchart(dom: HTMLAreaElement | any, options: EChartsOption) {
    const fn = ref<ECharts>()
    onMounted(() => {
        const instance = echarts.init(dom.value)
        fn.value = instance
        instance.setOption(options)
        window.addEventListener("resize", () => {
            fn.value && fn.value.resize({
                animation: {
                    easing: 'linear',
                    duration: 500
                }
            })
        })
    })
    onUnmounted(() => {
        window.removeEventListener("resize", () => {
            console.log('我被执行了');
            fn.value?.resize()
        })
    })
}
export default useEchart