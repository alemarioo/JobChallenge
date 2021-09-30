# JobChallenge

Programa para probar mis conocimientos sobre JavaScript, Express y sobre bases de datos.

Consiste en realizar una api que un usuario pueda ingresar datos sobre lugares y guardarlos en una base de datos. Para luego obtener la distancia de los guardados

## Librerias Usadas

| Libreria |  |
| ------ | ------ |
|Express|  Se utilizo para realizar la api|
|Mongoose| Se utilizo para realizar la conexion con la base de Datos MongoDB|
|Morgan |  Se utilizo para poder observar en la consola las peticiones que se hacen en el servidor|
|body-parser| fue una alternativa para poder leer el json enviado pero se utilizo otra manera|


## Softwares utilizados

| Software | |
| ------ | ------ |
|VS code| Editor de codigo se me hace mas facil manejar|
|MongoDB compass| Para poder observar la informacion que se va guardando en la base de datos|
| Insonmia | Software para poder realizar las peticiones al servidor |
| GitKraken | Para poder ver visualmente y facilitar el uso de git|

## Descripcion de las carpetas y archivos
- Crud: Realiza las peticiones a la base de datos MONGODB
- Funciones: Contiene las funciones matematicas utilizadas en el  proyecto
- Models: modelos utilizado en la base de datos en este caso Lugar que lo compone un nombre, una longitud y una latitud
- Rutas/index.js: contiene las rutas de la app, para el ingreso de datos se utilizo la ruta '/' ya que no se especifica en el enunciado, y para la obtencion de la distancia se utilizo '/distancia'.


## Carga de Datos
se puede enviar ya sea un arreglo de datos o un solo datos


## Experiencia Personal

Pudeo decir que he aprendido bastante sobre express de como realizar de manera rapida y facil una api sin muchas lineas de codigo

