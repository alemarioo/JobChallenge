/**
 * Funcion que recibe las latitudes y longitudes de dos lugares y retorna la distancia entre ellos
 * @returns {Number} distancia entre los dos lugares
 */
function distancia(placeOne, placeTwo ) {
    //asignacion de variables para hacer un poco mas entendible el codigo
    latitud1 = Radianes(placeOne.latitud)
    distancia1 = Radianes(placeOne.longitud)
    
    latitud2 = Radianes(placeTwo.latitud)
    distancia2 = Radianes(placeTwo.longitud)
    
    //diferencia de longitudes y latitudes
    dif_latitud = (latitud2-latitud1)
    dif_longitud = distancia2-distancia1

    //realizacion de la operacion matematica
    //sin^2(dif_long/2)*cos(lat1)*cos(lat2)
    Multi_L1L2Sin = Math.cos(latitud1)*Math.cos(latitud2)*(Math.sin(dif_longitud/2)**2)

    //sin^2(dif_lat/2) + lo de arriba
    DentroRaiz = Math.sin(dif_latitud/2)**2+Multi_L1L2Sin

    //raiz de la suma 
    raiz = Math.sqrt(DentroRaiz)
    
    // dos veces el radio por el arcoseno de la raiz
    Distancia_respuesta = 2*RADIO_DE_LA_TIERRA*Math.asin(raiz)

    return Distancia_respuesta
}

function Radianes(num) {
    return num*Math.PI/180
}

const RADIO_DE_LA_TIERRA = 6372.795477598;

module.exports = {distancia};