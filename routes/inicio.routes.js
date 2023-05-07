const { Router } = require('express');
const { sendDialogFlow } = require('../controllers/mensaje.controller');

const router = Router();

// Inicio de la APP
router.post( '/', sendDialogFlow );

// Prueba Unitarias
router.get('/', (req,res) => {
    res.send('Bievenido2');
})

router.post( '/prueba', async( req, res ) => {
    const { address } = req.body;
    console.log( JSON.parse( address ) );
    res.json({ address });
});

module.exports = router;