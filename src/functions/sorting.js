export function sorting(arr, method, objKey) {
    if(method === 'fromBiggest') {
        return arr.sort((a,b) => a[objKey] > b[objKey] ? -1 : 0)
    }

    if(method === 'fromSmaller') {
        return arr.sort((a,b) => a[objKey] < b[objKey] ? -1 : 0)
    }
}