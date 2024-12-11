import mongoose from "mongoose";

const PersonasSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
},
    {
        timestamps: true
    });

export default mongoose.model('Personas', PersonasSchema);