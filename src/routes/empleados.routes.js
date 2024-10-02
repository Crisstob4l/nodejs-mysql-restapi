import { Router } from "express";   // Para crear secciones de rutas
import { getEmpleados, crearEmpleados, actualizarEmpleado, eliminarEmpleado, getEmpleado } from "../controllers/empleados.controller.js";	// Llamamos el doc de func

const router = Router();    // Para usar el enrutador

router.get('/empleados', getEmpleados)	// Colocamos el nombres de las funciones, INVOCAMOS LA FUNCION

router.get('/empleados/:id', getEmpleado)  // pasamos un paremetro para buscar por id

router.post('/empleados', crearEmpleados) // Colocamos lo mismi que arriba

router.patch('/empleados/:id', actualizarEmpleado)  // Podemos modificar parcialmente

router.delete('/empleados/:id', eliminarEmpleado)




export default router;