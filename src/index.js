import {PORT} from './config.js'    // Importamos para usar las variables de entorno
import app from './app.js';

app.listen(PORT);
console.log('Servidor escuchando por el puerto ', PORT);