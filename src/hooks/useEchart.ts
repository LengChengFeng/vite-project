import { onDeactivated, onMounted } from "vue";
import { ref } from "vue"
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption
function useEchart(dom: any, options: EChartsOption) {
    let fn = ref()
    onMounted(() => {
        const echartInstance = echarts.init(dom.value)
        fn.value = echartInstance.resize
        echartInstance.setOption(options)
        window.addEventListener("resize", () => {
            console.log(23344);
            console.log(echartInstance.resize);
            fn.value()
        })
    })
    onDeactivated(() => {
        window.removeEventListener("resize", fn.value)
    })
}

export default useEchart