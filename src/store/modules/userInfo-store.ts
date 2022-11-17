import { defineStore } from "pinia"
import { getLocalData } from "@/utils/local"
import router from "@/router"

interface userInfoType {
    userInfo: any,
    roles: any[],
    menu: any[]
}
export const useUserInfoStore = defineStore("userInfo", {
    state: (): userInfoType => ({
        userInfo: getLocalData('userInfo') || {},
        roles: [],
        menu: getLocalData("roleList") || []
    }),
    actions: {
        setMenu(obj: any[]) {
            this.menu = obj
            this.addRouter()
        },
        addRouter() {
            const map = new Map()
            const modules = import.meta.glob(["../../views/**/**.vue"])
            function getName(val: string) {
                let arr = val.split('./views')
                return arr[arr.length - 1].split('.vue')[0].replace('/index', '')
            }
            for (const [key, component] of Object.entries(modules)) {
                map.set(getName(key), component)
            }
            let arr: any = []
            const deep = (obj: any) => {
                obj.forEach((item: any) => {
                    if (item.children && Array.isArray(item.children) && item.children.length !== 0 && item.type !== 2) {
                        deep(item.children)
                    } else {
                        arr.push({
                            path: `${item.url}`,
                            meta: { name: item.name, icon: item.icon },
                            component: map.get(item.url) ? map.get(item.url) : () => import("@/views/not-found/index.vue")
                        })
                    }
                });
            }
            deep(this.menu)
            const errorRoutes = [
                {
                    path: '/404',
                    name: 'err',
                    meta: { title: '404', },
                    component: () => import("@/views/not-found/index.vue")
                },
                {
                    path: '/:pathMatch(.*)',
                    redirect: '/404'
                }
            ]
            arr.push(...errorRoutes)
            const obj = {
                path: "/main",
                component: () => import("@/layout/index.vue"),
                children: arr
            }
            router.addRoute(obj)
        }
    }
})

