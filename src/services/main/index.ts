
import Request from "../index"


const Api = {
    //用户权限
    getRoleList(queryInfo: any) {
        return Request.post({
            url: '/role/list',
            data: { ...queryInfo }
        })
    }
}
export default Api