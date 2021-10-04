let {inmobiliaria, departamentos}  = require('./inmobiliaria');

const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
const nombre = "Laura Ruiz";
const tema = "Inmobiliaria";

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
console.log(inmobiliaria.listarDepartamentos(departamentos));
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
console.log(inmobiliaria.departamentosDisponibles(departamentos));
console.log(o);

console.log(v, oo + " D. buscarPorId");
console.log(inmobiliaria.buscarPorId(departamentos,2));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
console.log(inmobiliaria.buscarPorPrecio(departamentos,2395.8));
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
console.log(inmobiliaria.precioConImpuesto(departamentos,10));
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
console.log(inmobiliaria.simplificarPropietarios(departamentos));
console.log(o);
