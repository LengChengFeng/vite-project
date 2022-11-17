
import router from "./router";
import { getLocalData } from "./utils/local"
import { useUserInfoStore } from "@/store/modules/userInfo-store";

let flag = true
router.beforeEach(async (to) => {
    const token = getLocalData("token")
    const userStore = useUserInfoStore()
    if (to.path !== '/login') {
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




