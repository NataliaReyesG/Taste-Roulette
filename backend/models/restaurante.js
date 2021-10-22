const mongoose = require("mongoose")
const { Schema } = mongoose

const restauranteSchema = new Schema(
    {
        namerestaurante: {type: String, required: true},
        nit: {type: String, required: true},
        local: {type: String, required: true},
        adress: {type: String, required: true},
        phone: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        role: {type: String, required: true},
        
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Restaurante", restauranteSchema)