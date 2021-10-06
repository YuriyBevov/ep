const { Schema, model } = require('mongoose');

const DepartmentSchema = new Schema({

}, {
  collection: 'departments'
})

module.exports = model('DepModel', DepartmentSchema)