


export function saveLocalData(key:string,data:any) {
    window.localStorage.setItem(key,JSON.stringify(data))
}

export function getLocalData(key:string) {
    const value = window.localStorage.getItem(key)
    return  JSON.parse(value as any)
}

export function removeLocalData(key:string) {
    window.localStorage.removeItem(key)
}