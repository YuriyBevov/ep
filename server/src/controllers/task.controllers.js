const { TaskModel, UserModel } = require('../models/index.js');

class taskControllers {
    async addTask(req, res) {
        try {          
            const { title, master } = req.body

            await TaskModel.findOne({title})
            .then((isExist) => {
                if(isExist) {
                    return res.status(400).json({
                        message: 'Задача с таким именем уже существует !'
                    })
                } else {
                    master === null ?
                    req.body.status = 'isOpened' : 'inWork'

                    new TaskModel(req.body).save();
            
                    return res.status(200).json({
                        message: 'Задача была успешно создана !'
                    })
                }
            })
            .catch(err => {
                return res.status(400).json({
                    message: 'Произошла непредвиденная ошибка... Попробуйте снова !'
                })
            })
        }

        catch {
            return res.status(400).json({
                message: 'Произошла ошибка в процессе создания задачи... Попробуйте снова !'
            })
        }
    }

    async getAll(req, res) {
        try {
            await TaskModel.find({})
            .then((tasks) => {
                return res.status(200).json(tasks)
            })
            .catch(err => {
                return res.status(400).json({
                    message: 'Произошла непредвиденная ошибка... Попробуйте снова !'
                })
            })
        }

        catch {
            return res.status(400).json({
                message: 'Произошла ошибка в процессе загрузки задач... Попробуйте снова !'
            })
        }
    }
}

module.exports = new taskControllers() 