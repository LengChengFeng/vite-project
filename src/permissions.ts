
import router from "./router";
import { startProgress, closeProgress } from "./plugin/progress"
import { getLocalData } from "./utils/local"
import { useUserInfoStore } from "@/store/modules/userInfo-store";

let flag = true
router.beforeEach(async (to) => {
    const token = getLocalData("token")
    const userStore = useUserInfoStore()
    if (to.path !== '/login') {
        startProgress()
        if (!!token) {
            if (flag && userStore.menu) {
                flag = false
                userStore.addRouter()
                return to.path
            }
        } else {
            return '/login'
        }
    }


})

router.afterEach(() => {
    closeProgress()
})



