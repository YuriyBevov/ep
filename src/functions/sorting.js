export function sorting(arr, method, objKey) {
    let result = [...arr]
    let temp = []

    if(objKey === 'expDate') {
        result = result.filter(item => {
            if(item[objKey] === null) {
                temp.push(item)
            }
            return item[objKey] !== null
        })
    }

    if(method === 'fromBiggest') {
        if(temp.length) {
            let sorted = result.sort((a,b) => a[objKey] > b[objKey] ? -1 : 0)
            return [...sorted, ...temp]
        }
        return arr.sort((a,b) => a[objKey] > b[objKey] ? -1 : 0)
    }

    if(method === 'fromSmaller') {
        if(temp.length) {
            let sorted = result.sort((a,b) => a[objKey] < b[objKey] ? -1 : 0)
            return [...sorted, ...temp]
        }
        return arr.sort((a,b) => a[objKey] < b[objKey] ? -1 : 0)
    }
}