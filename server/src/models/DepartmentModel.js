const { Schema, model } = require('mongoose');

const DepartmentSchema = new Schema({
    title: { type: String, required: true },
    heads: { type: Array, default: null },
    members: { type: Array, default: null },
    tasks: { type: Array, default: null }
}, {
  collection: 'departments'
})

module.exports = model('DepModel', DepartmentSchema)