const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name :{type: String, required: true},
    lastname:{type: String, required: true},
    adress:{type: String, required: true},
    phone:{type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, required: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('cliente', userSchema, 'clientes')