export function filtration(searchOpt = null, filterOpt = null, sortOpt = null, isReversed = false, arr) {
    let result = []
    console.log('searching')
    if(searchOpt !== null) {
        console.log('if')
        let searchText = searchOpt.data.trim().toLowerCase()
        arr.forEach( el => el[searchOpt.objKey].toLowerCase().trim().indexOf(searchText) !== -1 ? result.push(el) : null )
    } else {
        console.log('else')
        result = arr
    }

    if(filterOpt !== null && filterOpt.data !== '') {
        console.log('f')
        result = result.filter(item => item[filterOpt.objKey] === filterOpt.data)
    }

    if(sortOpt !== null && sortOpt.data !== '') {
        console.log('sort')
        result.sort(function (a, b) {
            if (a[sortOpt.objKey] > b[sortOpt.objKey]) {
                return -1;
            }
            return 0;
        });
    }
    
    /*if(isReversed) {
        console.log('rev', isReversed)
        result.reverse()
    }*/
    
    return result 
}