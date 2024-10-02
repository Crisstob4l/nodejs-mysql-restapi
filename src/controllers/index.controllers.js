// Colocamos las funciones uqe se esta hacindo en el index.js

import { pool } from '../db.js';   // Traemos la variable que nos va a permitir hacer la conexion

export const ping =  async (req, res) => {
	res.send('pong');	// Enviamos el resultado en formato json
}