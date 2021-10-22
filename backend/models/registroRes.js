const {Schema, model} = require('mongoose');

const registroResShema = new Schema({
    namerestaurante :{type: String, required: true},
    nit:{type: Number, required: true},
    local:{type: Number, required: true},
    adress:{type: String, required: true},
    phone:{type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, required: true},
    file:{type: String, required: true},
   
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('RegistroRes', registroResShema, 'registrosRes')