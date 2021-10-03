export class FilterSort {
    constructor(arr, opt = null) {
        this.searchOpt  = opt.searchOpt  ? opt.searchOpt  : null;
        this.filterOpt  = opt.filterOpt  ? opt.filterOpt  : null;
        this.sortOpt    = opt.sortOpt    ? opt.sortOpt    : null;

        this.arr  = arr;
        this.result = arr;
    }

    searching() {
        this.result = []
        let searchText = this.searchOpt.data.trim().toLowerCase()
        this.arr.forEach( el => el[this.searchOpt.objKey].toLowerCase().trim().indexOf(searchText) !== -1 ? this.result.push(el) : null )
    }

    filtering() {
        this.result = this.result.filter(item => item[this.filterOpt.objKey] === this.filterOpt.data)
    }

    sorting() {
        if(this.sortOpt.data !== 'Без сортировки') {
            this.result.sort((a, b) => {
                if (a[this.sortOpt.objKey] > b[this.sortOpt.objKey]) {
                    return -1;
                }
                return 0;
            });
        } 
        
        else {
            console.log('else')
            this.result.sort((a, b) => {
                if (a.createdBy.createdDate < b.createdBy.createdDate) {
                    console.log('<')
                    return -1;
                }
                return 0;
            });
        }

        
    }

    init() {
        console.log(this.searchOpt, this.filterOpt, this.sortOpt)

        this.searchOpt.data !== null ?
        this.searching() : null

        this.filterOpt.data !== null ?
        this.filtering() : null
        
        this.sortOpt.data !== null ?
        this.sorting() : null

        return this.result
    }


    /*searching() {
        console.log('searching')
        if(this.searchOpt !== '') {
            this.result = [];
            let searchText = this.searchOpt.data.trim().toLowerCase()
            this.arr.forEach( el => el[this.searchOpt.objKey].toLowerCase().trim().indexOf(searchText) !== -1 ? this.result.push(el) : null )
        }
    }

    filtration() {
        console.log('filtration')
        if(this.filterOpt.data !== '') {
            this.result = this.result.filter(item => item[this.filterOpt.objKey] === this.filterOpt.data)
        }
    }

    sorting() {
        console.log('sorting')
        this.result.sort(function (a, b) {
            if (a[this.sortOpt.objKey] > b[this.sortOpt.objKey]) {
                return -1;
            }
            return 0;
        });
        console.log(this.result)
            this.result.sort((a, b) => {
                console.log(a[this.sortOpt.objKey], b[this.sortOpt.objKey])
                a[this.sortOpt.objKey] > b[this.sortOpt.objKey] ? -1 : 0
            })

            console.log(this.result)
        let that = this
        this.result.sort((a, b) => {
            if (a[this.sortOpt.objKey] > b[this.sortOpt.objKey]) {
                return -1;
            }
            return 0;
        });
    }

    init() {
        console.log(this.isReversed, this.searchOpt, this.sortOpt, this.filterOpt)


        this.isReversed !== null ?
        this.reverseArray() : null

        this.searchOpt.data !== null ?
        this.searching() : null

        /*this.searchOpt !== null && this.searchOpt.data !== '' ?
        this.searching() : null

        this.sortOpt !== null && this.searchOpt.data !== '' ?
        this.sorting() : null

        this.filterOpt !== null && this.searchOpt.data !== '' ?
        this.filtration() : null*/

        //return this.result = [] ? this.arr : this.result
    //}*/
} 
