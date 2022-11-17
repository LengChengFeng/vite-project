
import Request from "./index"


//用户信息
enum LoginApI {
    AccountLogin = '/login',
    LoginUserInfo = '/users/',
    UserMenus = '/role/' // 用法: role/1/menu
}


interface Iaccount {
    name: string
    password: string
}

const infoApi = {
    getLogin(data: Iaccount) {
        return Request.post({
            url: LoginApI.AccountLogin,
            data
        })
    },
    //获取用户数据
    getUserInfoById(id: number) {
        return Request.get({
            url: LoginApI.LoginUserInfo + id
        })
    },

    //用户权限
    getUserMenuByRoleId(id: number) {
        return Request.get({
            url: LoginApI.UserMenus + id + '/menu'
        })
    }
}

export default infoApi