require('../mongo/connection')
const LugarModel = require('../models/info')

/**
 * Metodo que Guarda la informacion en la base de datos
 * @param {String} nombre Nombre Del lugar a registrar
 * @param {Number} longitud Longitud del lugar
 * @param {Number} latitud Latitud del lugar
 */
async function RegistarNuevoLugar(nombre, longitud, latitud) {
    guarda_nombre = nombre.toLowerCase()
    const LugarMongo = new LugarModel({
        nombre: guarda_nombre,
        longitud: longitud,
        latitud: latitud
    })

    await LugarMongo.save((err) => {
        if (err) {
            console.log(err);
        }
    });
}

/**
 * Funcion que obtiene la informacion del lugar en la base de datos
 * @param {String} nombre 
 * @returns {JSON} Retorna el json del lugar encontrado
 */
async function ObtenerLugar(nombre) {
    const LugarEncontrado = await LugarModel.findOne({nombre: nombre})
    return LugarEncontrado;
}

module.exports = {RegistarNuevoLugar, ObtenerLugar};