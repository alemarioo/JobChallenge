const {RegistarNuevoLugar, ObtenerLugar} = require('../Crud/crud_info');
const {distancia} = require('../Funciones/distancia')
const {Router} = require('express');
const express = require('express');
const router = Router();


router.post('/', express.json({type: '*/*'}), (req,res)=> {

    //If que sirve para verificar si esta mandando un solo dato o esta enviando un array de datos
    if (req.body.length == null) {
        RegistarNuevoLugar(req.body.nombre, req.body.longitud, req.body.latitud)
    }else{ 
        req.body.forEach(lugar_ => {
            RegistarNuevoLugar(lugar_.nombre, lugar_.longitud, lugar_.latitud)
        });
    }
    
    res.send({"mensaje":"Se ha Guardado Correctamente"})
})

router.get('/distance', async (req,res)=> {
    const placeOne = await ObtenerLugar(req.query.placeOne.toLowerCase())
    
    const placeTwo = await ObtenerLugar(req.query.placeTwo.toLowerCase())
    if (placeOne != null && placeTwo != null) {
        dis = distancia(placeOne, placeTwo)
        res.send({"distancia": dis, "unidad": "km"})
    }else{
        res.send({"mensaje": "upss... parece ser que uno no ha sido registrado"} )
    }
    
    
})

module.exports = router;