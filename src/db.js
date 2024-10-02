// Para conectarnos a la base de datos de mysql
import { createPool } from "mysql2/promise";    // Para usar multiples conexiones con mysql
import { 	// importamos los datos que vamos a usar de las variables de entorno
	DB_DATABASE, 
	DB_HOST, 
	DB_PASSWORD, 
	DB_PORT, 
	DB_USER } from "./config.js";
// Creamos el objeto donde estran los datos de nuestra base de datos
export const pool = createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_DATABASE
})