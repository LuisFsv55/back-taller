require('dotenv').config();
const config = require('../config');
const uuid = require('uuid');
const { detectIntent } = require('../helpers/intentDetectado');
const { controllerDialogFlow } = require('./dialogflow.controller');

const sendDialogFlow = async( req, res ) => {
    
    // Body de Flutter
    const { message, battery, hour, date } = req.body;
    // console.log(req.body);
    // Conexión a dialogflow
    let respuesta = await detectIntent( config.GOOGLE_PROJECT_ID, 1234, message, '', 'es' );
    let peticion_body = {};
    // Respuesta de Dialogflow
    peticion_body = await controllerDialogFlow( respuesta, message.toLocaleLowerCase(), battery, hour, date );
    res.json({ peticion_body });
}
module.exports ={ sendDialogFlow }