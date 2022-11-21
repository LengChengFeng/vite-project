
import { ref } from "vue"
import MyDialog from '@/components/AppDialog/index.vue'
export function useDialogHooks() {
    // const dialogRef = ref<InstanceType<typeof MyDialog>>()
    const dialogRef = ref()
    //查看
    const handleView = (row: any) => {
        dialogRef.value?.openDialog('view', row)
    }
    //添加
    const handleAdd = () => {
        dialogRef.value?.openDialog('create')
    }
    //编辑
    const handleEdit = (row: any) => {
        dialogRef.value?.openDialog('edit', row)
    }
    return {
        dialogRef,
        handleView,
        handleAdd,
        handleEdit
    }
}