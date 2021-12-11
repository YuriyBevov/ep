export function searching(arr, text, objKey) {
    console.log(arr, text, objKey)
    let result = []
    
    let searchText = text.trim().toLowerCase()
    arr.forEach( el => el[objKey].toLowerCase().trim().indexOf(searchText) !== -1 ? result.push(el) : null )

    return result
}