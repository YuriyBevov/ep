import department from "src/store/department/department"

export function filtration(arr, option, objKey, innerObjKey = null) {

    return arr.filter(item => { 
        if(innerObjKey !== null) {
            return item[objKey][innerObjKey] === option
        }
        return item[objKey] === option
    })
}