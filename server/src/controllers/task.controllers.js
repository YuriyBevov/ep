const { TaskModel, UserModel } = require('../models/index.js');

class taskControllers {
    async addTask(req, res) {
        try {          
            const { title, master, members } = req.body

            await TaskModel.findOne({title})
            .then((isExist) => {
                if(isExist) {
                    return res.status(400).json({
                        message: 'Задача с таким именем уже существует !'
                    })
                } else if(members && !master) {
                    return res.status(400).json({
                        message: 'Если вы выбрали участников задачи, то должно быть назначено ответственное лицо !'
                    })
                }               
                else {
                    master ?
                    req.body.status = 'inWork' : 'isOpened'

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
                /*tasks.forEach(task => {
                    task.status =   task.status === 'isOpened' ? 'Открытая задача' :
                                    task.status === 'inWork'   ? 'В работе'        :
                                    task.status === 'isFrozen' ? 'Приостановлена'  :
                                    task.status === 'isDone'   ? 'Выполнена'       :
                                    task.status === 'isClosed' ? 'Закрыта'         : null
                }) */
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