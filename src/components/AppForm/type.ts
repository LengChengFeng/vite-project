import type { FormRules } from 'element-plus'

export interface FormItemType {
    type: 'input' | 'radio' | 'select' | 'date' | 'textarea' | 'checkbox' | 'custom', //输入框的类型
    field: string, //输入框绑定的字段名
    label?: string,
    placeholder: string,
    slotName?: string, //自定义插槽名字
    col?: string | number //一个输入框占据一行多少 默认是一排放4个  col:"12"输入框宽度占据宽度一半 col:24是整行
    size?: 'large' | 'default' | 'small',
    width?: string | number,
    height?: string | number,
    clearable?: boolean,
}
export interface FormConfigType {
    formItem: FormItemType[],
    showBtn?: boolean, //是否显示操作按钮
    rules?: FormRules, //验证规则
    showTitle?: boolean //显示标题
    labelPosition?: 'left' | 'top' | 'right', //label的位置
    labelWidth?: string | number, //label的宽度
}