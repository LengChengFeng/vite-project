export interface IMenuItemType {
    icon: string
    id: number
    url: string
    name: string
    type: number
    hideMenu?: boolean
    children?: IMenuItemType[]
}