require('dotenv').config();
const uuid = require('uuid');
// const { convertidor } = require('../utils/index');

const controllerDialogFlow = async( resultado, senderId, battery, hour, date ) => {
    let peticion = {};
    let respuesta;
    switch ( resultado.intent.displayName ) {
        case 'Saludo':
            respuesta = await Saludo( resultado );
            peticion = await envio( respuesta )
            break;
        case 'Bateria':
                respuesta = await Bateria( resultado, battery );
                peticion = await envio( respuesta )
                break;
        case 'Hora':
            respuesta = await Hora( resultado, hour );
            peticion = await envio( respuesta )
            break;
        case 'Fecha':
            respuesta = await Fecha( resultado, date );
            peticion = await envio( respuesta )
            break;
        default:
            peticion = await envio( resultado.fulfillmentText );
            break;
    }
    return peticion;
}
const Saludo = async( resultado ) => {
    let respFlutter = `Hola, Bienvenido al asistente de celular`;
    return respFlutter;
}
const Bateria = async( resultado, battery ) => {
    let respFlutter = `La batería de su celular es: ${battery} porciento`;
    return respFlutter;
}
const Hora = async(resultado, hora)  => {
    let respFlutter = `Son las: ${hora} horas`;
    return respFlutter;
}
const Fecha = async(resultado, date)  => {
    let respFlutter = `Hoy es: ${date}`;
    return respFlutter;
}
const envio = ( resultado, tipo = 'text' ) => {
    let peticion = {};
    switch ( tipo ) {
        default:
            peticion = {
                recipient: {
                    id: uuid.v4()
                },
                message: {
                    text: resultado
                }
            }
            break;
    }
    return peticion;
}
module.exports = { controllerDialogFlow }