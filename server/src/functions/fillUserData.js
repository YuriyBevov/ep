// const { UserModel, GroupModel, DepartmentModel } = require('../models/index.js');

module.exports = function fillUserData(user) {

    /*async function getUsers(req, res) {
        try {
            await UserModel.find({})
            .then((resp) => {
                users = resp
            })
            .catch(err => {
                console.log(err)
            })
        }

        catch {
            console.log('catch err')
        }
    }

    getUsers()*/

    //данная функуия проводит фильтрацию данных пользователя и возвращает только нужные для отправки на клиента

    return {
        _id: user._id,
        ordinalNumber: user.ordinalNumber,
        roles: user.roles,
        fullName: user.fullName,
        department: user.department,
        email: user.email,
        phone: user.phone,
        // будет пополняться с расширением приложения...
    }
}