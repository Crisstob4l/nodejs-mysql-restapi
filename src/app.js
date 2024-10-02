import express from 'express';  // importamos los mudulos de express
import Empleadorouter from './routes/empleados.routes.js';  // Para usar las rutas que definimos
import Indexrouter from './routes/index.routes.js';



const app = express();

app.use(express.json());    // Para entender lo que se recibe en formasto JSON

// Creamos las rutas
app.use('/api', Empleadorouter);    // Con esto ya usamos todas las rutas
app.use('/api',Indexrouter);

// Si el cliente ingresa a un url no valida, tiene que dar un 404 not found
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app