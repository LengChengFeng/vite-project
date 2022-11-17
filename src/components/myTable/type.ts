interface TableItemConfig {
    label: string,
    prop: string, //表格的字段内容 跟data中的数据对应
    align?: 'left' | 'center' | 'right',
    slotName?: string, //插槽名字
    width?: string | number,
    minWidth?: string | number
    fixed?: 'left' | 'right' //宽度不够的时候固定列
}

//对操作行的限制
interface OperateColumnType {
    width: string | number,
    align: 'left' | 'center' | 'right',
    fixed: 'left' | 'right'
}

export interface TableConfigType {
    showEditBtn?: boolean, //显示编辑按钮
    showCreateBtn?: boolean,//显示创建按钮
    showViewBtn?: boolean,//显示查看按钮
    showDelBtn?: boolean, //显示删除按钮
    showOperate?: boolean //显示操作列
    showSection?: boolean, //显示可选择框
    showIndex?: boolean, //显示索引
    showPagination?: boolean //显示分页
    tableItem: TableItemConfig[],
    permission?: any //权限
    tableWidth?: string
    operateColumnConfig: OperateColumnType
}
