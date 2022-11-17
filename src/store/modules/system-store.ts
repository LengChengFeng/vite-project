import { defineStore } from "pinia"

interface ITabsType {
    name: string,
    path: string
}
interface routerType {
    routerList: any[],
    TabsList: ITabsType[],
    currentPath: ITabsType,
}
export const useRouterStore = defineStore("router", {
    state: (): routerType => ({
        routerList: [],
        TabsList: [{ name: "核心技术", path: "/main/analysis/overview" }],
        currentPath: { name: "核心技术", path: "/main/analysis/overview" }
    }),
    actions: {
        changeRouterList(list: any) {
        },
        changeCurrentPath(router: ITabsType) {
            this.currentPath = router
        },
        changeTabsList(routerList: ITabsType) {
            const result = this.TabsList.find(item => item.path === routerList.path);
            if (!result) {
                this.TabsList.push(routerList)
            }
        }
    }
})

