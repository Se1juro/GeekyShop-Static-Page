const express= require('express')
const app = express() //Es el servidor
const path=require('path');
const favicon = require('serve-favicon')

//Configuracion del server
app.set('port',3000)
app.set('views',path.join(__dirname,'vistas'))
app.engine('html',require('ejs').renderFile)//Indico que usare la extension HTML pero EJS lo renderizara
app.set('view engine','ejs')

//Rutas
app.use(require('./rutas/index'))

//archivos estaticos
app.use(favicon(path.join(__dirname,'publico','imagenes','favicon.ico')));
app.use(express.static(path.join(__dirname,'publico')))//TRAIGO LOS ARCHIVOS ESTATICOS, LOS QUE USARE EN MI PAGINA
//PARA ESO DEBO TENER LA CARPETA PUBLICO, CON LOS ARCHIVOS DENTRO

app.listen(app.get('port'), ()=> { //Escuchando el server
    console.log("Puerto de servidor: ",app.get('port'));
});