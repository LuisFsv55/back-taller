require('dotenv').config();
const uuid = require('uuid');
// const { convertidor } = require('../utils/index');

const controllerDialogFlow = async( resultado, senderId ) => {
    let peticion = {};
    let respuesta;
    switch ( resultado.intent.displayName ) {
        case 'Saludo':
            respuesta = await Saludo( resultado );
            peticion = await envio( respuesta )
            break;
    
        default:
            peticion = await envio( resultado.fulfillmentText );
            break;
    }
    return peticion;
}
const Saludo = async( resultado ) => {
    let respFlutter = `Hola, Bienvenido al asistente`;
    return respFlutter;
}
// const Donde = async( resultado, address ) => {
//     let respFlutter = `Usted se encuentra en`;
//     if ( address?.area ) {
//         respFlutter = respFlutter + `${ address?.area }`
//     }
//     if ( address?.provincia ) {
//         respFlutter = respFlutter + `${ address?.provincia }`;
//     }
//     if ( address?.localidad ) {
//         respFlutter = respFlutter + `Localidad: ${ address?.localidad }`;
//     }
//     if ( address?.sublocalidad ) {
//         respFlutter = respFlutter + `SubLocalidad: ${ address?.sublocalidad }`;
//     }
//     if ( address?.calle ) {
//         respFlutter = respFlutter + `Calle: ${ address?.calle }`;
//     }
//     if ( address?.numero ) {
//         respFlutter = respFlutter + `Subvía: ${ address?.numero }`;
//     }
//     return respFlutter;
// }
// const Repetir = async( resultado, address ) => {
//     let respFlutter = `Claro, usted se encuentra en`;
//     if ( address?.area ) {
//         respFlutter = respFlutter + `${ address?.area }`
//     }
//     if ( address?.provincia ) {
//         respFlutter = respFlutter + `${ address?.provincia }`;
//     }
//     if ( address?.localidad ) {
//         respFlutter = respFlutter + `Localidad: ${ address?.localidad }`;
//     }
//     if ( address?.sublocalidad ) {
//         respFlutter = respFlutter + `SubLocalidad: ${ address?.sublocalidad }`;
//     }
//     if ( address?.calle ) {
//         respFlutter = respFlutter + `Calle: ${ address?.calle }`;
//     }
//     if ( address?.numero ) {
//         respFlutter = respFlutter + `Subvía: ${ address?.numero }`;
//     }
//     return respFlutter;
// }
// const Localidad = async( resultado, address ) => {
//     let respFlutter = `Usted se encuentra en la`;
//     if ( address?.localidad ) {
//         respFlutter = respFlutter + `Localidad: ${ address?.localidad }`;
//     }
//     if ( address?.sublocalidad ) {
//         respFlutter = respFlutter + `SubLocalidad: ${ address?.sublocalidad }`;
//     }
//     return respFlutter;
// }

// const Pasos = async( resultado, address, pasos ) => {
//     let respFlutter = `Usted recorrio ${ pasos } pasos y su nueva ubicación es`;
//     if ( address?.area ) {
//         respFlutter = respFlutter + `${ address?.area }`
//     }
//     if ( address?.provincia ) {
//         respFlutter = respFlutter + `${ address?.provincia }`;
//     }
//     if ( address?.localidad ) {
//         respFlutter = respFlutter + `Localidad: ${ address?.localidad }`;
//     }
//     if ( address?.sublocalidad ) {
//         respFlutter = respFlutter + `SubLocalidad: ${ address?.sublocalidad }`;
//     }
//     if ( address?.calle ) {
//         respFlutter = respFlutter + `Calle: ${ address?.calle }`;
//     }
//     if ( address?.numero ) {
//         respFlutter = respFlutter + `Subvía: ${ address?.numero }`;
//     }
//     return respFlutter;
// }
// const Metros = async( resultado, address, pasos ) => {
//     let distanciaRecorrida = convertidor( parseInt( pasos ) );
//     let respFlutter = `Usted avanzo ${ distanciaRecorrida } metros y su nueva ubicación es`;
//     if ( address?.area ) {
//         respFlutter = respFlutter + `${ address?.area }`
//     }
//     if ( address?.provincia ) {
//         respFlutter = respFlutter + `${ address?.provincia }`;
//     }
//     if ( address?.localidad ) {
//         respFlutter = respFlutter + `Localidad: ${ address?.localidad }`;
//     }
//     if ( address?.sublocalidad ) {
//         respFlutter = respFlutter + `SubLocalidad: ${ address?.sublocalidad }`;
//     }
//     if ( address?.calle ) {
//         respFlutter = respFlutter + `Calle: ${ address?.calle }`;
//     }
//     if ( address?.numero ) {
//         respFlutter = respFlutter + `Subvía: ${ address?.numero }`;
//     }
//     return respFlutter;
// }
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