import type { FormRules } from 'element-plus'


export const menuTypeList = [
    {
        name: '目录',
        value: 1
    },
    {
        name: '菜单',
        value: 2
    },
    {
        name: '按钮',
        value: 3
    }
]
export const menuStatusList = [
    {
        name: '开启',
        value: 1
    },
    {
        name: '关闭',
        value: 0
    }
]

export const menuShowList = [
    {
        name: '显示',
        value: 1
    },
    {
        name: '隐藏',
        value: 0
    }
]

export const menuKeepList = [
    {
        name: '显示',
        value: 1
    },
    {
        name: '隐藏',
        value: 0
    }
]

export const data = [
    {
        value: '1',
        label: '系统',
        children: [
            {
                value: '2',
                label: '系统设置',
                children: [
                    {
                        value: '2',
                        label: '系统反馈',
                    },
                ],
            },
        ],
    },
    {
        value: '23',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
]


export const rules: FormRules = {
    path: [
        {
            required: true, message: "路由地址为必填项"
        }
    ],
    menuName: [
        {
            required: true, message: "名称地址为必填项"
        }
    ],
    icon: [
        {
            required: true, message: "菜单图标必填项"
        }
    ]
}