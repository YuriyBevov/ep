export function getTaskStatusColor(status) {
    return  status === 'isOpened' ? 'text-red-14'   :
            status === 'inWork'   ? 'text-green-12' :
            status === 'isFrozen' ? 'text-grey-4'   :
            status === 'isDone'   ? 'text-green-10' :
            status === 'isClosed' ? 'text-grey-10'  : null
}