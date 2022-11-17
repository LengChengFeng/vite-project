import type { FormConfigType } from '@/components/AppForm/type'
import type { TableConfigType } from '@/components/myTable/type'

export const formItemConfig: FormConfigType = {
    formItem: [
        {
            type: 'input',
            field: 'name',
            placeholder: '请输入角色名称',
            label: '角色名称',
        },
        {
            type: 'input',
            field: 'intro',
            placeholder: '介绍',
            label: '介绍'
        },
        {
            type: 'date',
            field: 'createAt',
            placeholder: '创建时间',
            label: '创建日期'
        }
    ],

}
export const tableConfig: TableConfigType = {
    tableItem: [
        { label: 'ID', prop: 'id', align: 'center' },
        { label: '用户名', prop: 'name', align: 'center' },
        { label: '创建日期', prop: 'custom', align: 'center', slotName: "createDate" },
        { label: '修改日期', prop: 'custom', align: 'center', slotName: "updateDate" },
        { label: '介绍', prop: 'intro', align: 'center' },
    ],
    operateColumnConfig: {
        width: '250',
        align: 'left',
        fixed: 'right'
    },
    permission: {
        edit: 'edit',
        view: 'view',
        add: 'add',
        del: 'del'
    }
}

export const dialogFormItemConfig: FormConfigType = {
    formItem: [
        {
            type: 'input',
            field: 'name',
            placeholder: '请输入角色名称',
            label: '角色名称',
            col: 24,
            width: "85%",
            height: "45px"
        },
        {
            type: 'input',
            field: 'intro',
            placeholder: '介绍',
            label: '介绍',
            col: 24,
            width: "85%",
            height: "45px"
        },
        {
            type: 'date',
            field: 'createAt',
            placeholder: '创建时间',
            label: '创建日期',
            col: 24,
            width: "85%",
            height: "45px"
        }
    ],
    rules: {
        name: [
            { required: true, message: "名称为必填项" }
        ],
        intro: [
            { required: true, message: "介绍为必填项" }
        ],
        createAt: [
            { required: true, message: "创建时间为必填项" }
        ]
    },
    showBtn: false
}