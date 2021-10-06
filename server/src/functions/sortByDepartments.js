module.exports = function sortByGroups(deps, users) {
    deps.forEach(dep => {

        if(dep.members.length) {

            dep.members.forEach(memberID => {
                users.forEach( user => { 
                    if(user._id == memberID) {
                        user.departments.push(dep._id)
                    }
                });
            })

            dep.masters.forEach(masterID => {
                users.forEach( user => {
                    
                    if(user._id == masterID) {
                        user.isDepMaster.push(dep._id)
                    }
                })
            })
        }
    })  

     return {
        users
    }
}