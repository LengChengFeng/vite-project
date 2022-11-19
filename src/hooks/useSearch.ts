

export function useSearch(fn: (args?: any) => void) {

    //我点击了查询
    const handleSearch = (row: any) => {
        fn({ ...row })
    }
    //重置
    const handleReset = () => {
        fn({})
    }
    return {
        handleSearch,
        handleReset
    }
}