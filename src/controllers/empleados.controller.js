// Aqui colocamos las funciones que se trabajaran para empleados
// Esto es llamado CONTROLADORES
import { pool } from "../db.js";	// Traemos la variable pool que es la que hace la conn a la db

export const getEmpleados =  async (req, res) => {
	// Vamos a manejar errores para evitar que la app se detenga por completo
	try {

			// Vamos a obtener todos los empleados
	const [rows] = await pool.query('SELECT * FROM employee')
	res.json(rows)

	} catch (error) { // si existe un error, le envio algo al cliente
		return res.status(500).json({
			message: 'Ocurrio algun errot'
		})
		
	}

}


export const getEmpleado = async (req, res) => {
	try {	// Para manejar los errores

			 // req.params guarda en un objeto todos los parametros, nos srive para trabakar con ellos
	const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
	
	if (rows.length <= 0) {
		return res.status(404).json({
			message: 'Empleado no encontrado'
		})
		
	}
	res.json(rows[0]);
	} catch (error) {
		return res.status(500).json({
			message: 'Ocurrio un error'
		})
		
	}



}


export const crearEmpleados = async (req, res) => {
	try {	// Para manejar los errores
		const {nombre, sueldo} = req.body;	// Extraemos los datos que recibimos desde el cliente
		// Vamos a crear un empleado en nuestra tabla employee de nuestra db
		// SQL normal hasta VALUES, de ahi viene el uso de la biblioteca
		// le pasamos los valores que sacamos del body 
		const [rows] = await pool.query('INSERT INTO employee (nombre, sueldo) VALUES (?, ?)', [nombre, sueldo]);
		res.send({// Mostramos el resultado de manera limpia con los campos que ocupemos
			id: rows.insertId,
			nombre,
			sueldo,
		});	
	} catch (error) {
		return res.status(500).json({
			message: 'Ocurrio un error'
		})
	}

}

export const eliminarEmpleado = async(req, res) => {
	try {
			// Para eliminar hacemos lo mismo que el que es para buscar
	const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[req.params.id]);
	if (result.affectedRows <= 0) {	// Es decir que no elimino nada
		return res.status(404).json({
			message: 'Empleado no encontrado'
		})
		
	}
	res.sendStatus(204);	// Todo bien pero sin enviar respuesta
	} catch (error) {
		return res.status(500).json({
			message: 'Ocurrio un error'
		})
		
	}
}


export const actualizarEmpleado = async (req, res) => {
try {
	const {id} = req.params;	// Obtenemos el ID
	const {nombre, sueldo} = req.body; // Obtenemos los datos a actualizar
	const [result] = await pool.query('UPDATE employee SET nombre = IFNULL(?, nombre), sueldo = IFNULL(?, sueldo) WHERE id = ?', [nombre, sueldo, id]);

	if (result.affectedRows === 0) {	// No se hizo ningun cambio
		return res.status(404).json({
			message: 'Empleado no encontrado'
		})
		
	}



	res.json('Recibido')
} catch (error) {
	return res.status(500).json({
		message: 'Ocurrio un error'
	})
	
}

}

