export function fillData(resArr, entList, objKey) {
    resArr.forEach(resArrItem => {
        entList.forEach(entListItem => {
            resArrItem._id === entListItem._id ?
            resArrItem[objKey] = entListItem[objKey] : null
        })
    })
}