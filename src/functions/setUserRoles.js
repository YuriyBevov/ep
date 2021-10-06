export function setUserRoles(roles) {
    let result = []
    
    roles.forEach(role => {
        role === 'СуперАдмин' ?
        result.push('superadmin') :
        role === 'Админ' ?
        result.push('admin') : 
        role === 'Пользователь' ?
        result.push('user') : result.push('quest')
    })

    return result
}