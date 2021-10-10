const { DepartmentModel, UserModel } = require('../models/index.js');
const checkUserDepartment = require('../functions/checkUserDepartment');

class departmentsControllers {
    async getAll(req, res) {
        try {
            
            await DepartmentModel.find({})
            .then((departments) => {
                return res.status(200).json({
                    message: 'Новый отдел успешно создан !',
                    departments
                })
            })
            .catch(err => {
                return res.status(400).json({
                    message: 'Не удалось получить список отделов... Попробуйте снова !'
                })
            })
        }

        catch {
            return res.status(400).json({
                message: 'Произошла непредвиденная ошибка... Попробуйте снова !'
            })
        }
    }
    
    async addOne(req,res) {
        try {
            const { title, heads, members } = req.body

            await DepartmentModel.findOne({title})
            .then(async (department) => {
                if(department) {
                    return res.status(400).json({
                        message: 'Отдел с таким именем уже существует !'
                    })
                }

                if(members && !heads) {
                    return res.status(400).json({
                        message: 'В отделе должен быть выбран руководитель !'
                    })
                }

                new DepartmentModel(req.body).save();
        
                return res.status(200).json({
                    message: 'Отдел был успешно создан !'
                })
            })
            .catch(err => {
                return res.status(400).json({
                    message: 'Произошла непредвиденная ошибка... Попробуйте снова !'
                })
            })
        }

        catch {
            return res.status(400).json({
                message: 'Произошла ошибка в процессе создания отдела... Попробуйте снова !'
            })
        }
    }


}

module.exports = new departmentsControllers() 