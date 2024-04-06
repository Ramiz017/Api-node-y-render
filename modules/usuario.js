const {Schema, model} = require('mongoose'); // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos
// Define el esquema del modelo Usuario
const UsuarioSchema = Schema({


    id_reserva: {
        type: Number,
        required: true,
        unique: true
    },
    
    id_cotizacion: {
        type: Number,
        required: true
    },
    
    id_usuario: {
        type: Number,
        required: true
    },
    
    fechainicio: {
        type: String,
        required: true,
    },
    
    fechafin: {
        type: String,
        required: true
    },
    
    direccionenvio: {
        type: String,
        required: true
    },
    
    costoenvio: {
        type: Number,
        required: true,
    },
    
    descuento: {
        type: String,
        required: true
    },
    
    deposito: {
        type: Number,
        required: true
    },
    
    preciototal: {
        type: Number,
        required: true,
    },
    
    estado: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: [true, 'El password es obligatorio'], // Define que el campo password es obligatorio
        minlength: 3, // Define la longitud mínima del campo password
        maxlength: [60, 'El password debe ser de máximo 7 y se obtuvo: {VALUE}'], // Define la longitud máxima del campo password
    },

    email: {
        type: String,
        required: [true, 'El email es obligatorio'] // Define que el campo email es obligatorio
    }

})
// Crea y exporta el modelo Usuario a partir del esquema UsuarioSchema
module.exports = model('Usuario', UsuarioSchema);



    // nombre: {
    //     type: String,
    //     required: [true, 'El nombre es obligatorio'] // Define que el campo nombre es obligatorio
    // },

    // email: {
    //     type: String,
    //     required: [true, 'El email es obligatorio'] // Define que el campo email es obligatorio
    // },
    
    // password: {
    //     type: String,
    //     required: [true, 'El password es obligatorio'], // Define que el campo password es obligatorio
    //     minlength: 3, // Define la longitud mínima del campo password
    //     maxlength: [60, 'El password debe ser de máximo 7 y se obtuvo: {VALUE}'], // Define la longitud máxima del campo password
    // },

    // rol: {
    //     type: String,
    //     required: true, // Define que el campo rol es obligatorio
    //     enum: ['Admin', 'Usuario'] // Define que el campo rol solo puede tener los valores 'Admin' o 'Usuario'
    // },

    // estado: {
    //     type: Boolean,
    //     default: true, // Define el valor por defecto del campo estado como true
    //     required: [true, 'El estado es obligatorio'] // Define que el campo estado es obligatorio
    // },