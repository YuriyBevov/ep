export function filtration(searchOpt = null, filterOpt = null, sortOpt = null, isReversed = false, arr) {
    let result = []

    if(searchOpt !== null) {
        let searchText = searchOpt.data.trim().toLowerCase()
        arr.forEach( el => el[searchOpt.identifier].toLowerCase().trim().indexOf(searchText) !== -1 ? result.push(el) : null )
    } else {
        result = arr
    }

    if(filterOpt !== null && filterOpt.data !== '') {
        result = result.filter(item => item[filterOpt.identifier] === filterOpt.data)
    }

    if(sortOpt !== null && sortOpt.data !== '') {
        result.sort(function (a, b) {
            if (a[sortOpt.identifier] > b[sortOpt.identifier]) {
                return -1;
            }
            return 0;
        });
    }
    
    if(isReversed) {
        result.reverse()
    }
    
    return result 
}