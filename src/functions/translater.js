export function translater(str) {
    if(str === 'isOpened'){
        return 'Открытая задача'
    }

    if(str === 'Открытая задача'){
        return 'isOpened'
    }

    if(str === 'inWork') {
        return 'В работе'
    }

    if(str === 'В работе'){
        return 'inWork'
    }

    if(str === 'isFrozen') {
        return 'Приостановлена'
    }

    if(str === 'Приостановлена') {
        return 'isFrozen'
    }

    if(str === 'isDone') {
        return 'Выполнена'
    }

    if(str === 'Выполнена') {
        return 'isDone'
    }

    if(str === 'isClosed') {
        return 'Закрыта'
    }

    if(str === 'Закрыта') {
        return 'isClosed'
    }
}