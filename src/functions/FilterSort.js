export class FilterSort {
    constructor(arr, opt = null) {
        this.searchOpt  = opt.searchOpt  ? opt.searchOpt  : null;
        this.filterOpt  = opt.filterOpt  ? opt.filterOpt  : null;
        this.sortOpt    = opt.sortOpt    ? opt.sortOpt    : null;
        this.isReversed = opt.isReversed ? opt.isReversed : null;

        this.arr        = arr;
        this.result     = [...arr];
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
        if(this.sortOpt.data === 'Без сортировки') {
            this.result = [...this.arr]
        }
        
        else if(this.sortOpt.data !== 'Без сортировки' && this.sortOpt.sortMethod === 'fromBiggest') {
            this.result.sort((a, b) => {
                if (a[this.sortOpt.objKey] > b[this.sortOpt.objKey]) {
                    return -1;
                }
                return 0;
            });
        }

        else if(this.sortOpt.data !== 'Без сортировки' && this.sortOpt.sortMethod === 'fromSmaller') {
            this.result.sort((a, b) => {
                if (a[this.sortOpt.objKey] < b[this.sortOpt.objKey]) {
                    return -1;
                }
                return 0;
            });
        }        
    }

    init() {
        //console.log(this.searchOpt, this.filterOpt, this.sortOpt, this.isReversed)
        /*Должен быть первым, потому что перезаписывает рез массив, иначе будут конфликты в других методах*/
        /*Все протестировать!!!*/
        this.sortOpt.data !== null ?
        this.sorting() : null

        this.searchOpt.data !== null ?
        this.searching() : null

        this.filterOpt.data !== null ?
        this.filtering() : null

        if(this.isReversed !== null) {
            return this.result.reverse()
        }
        
        if(!this.result.length) {
            console.log('gecnj')
        }
        return this.result
    }
} 
