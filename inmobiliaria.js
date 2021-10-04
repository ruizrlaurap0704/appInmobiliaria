const fs = require('fs');

let deptosJSON = fs.readFileSync('deptos.json', 'utf8');

let departamentos = JSON.parse(deptosJSON);

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const inmobiliaria = {
  // A Se almacenael array departamentos en dpto
  dpto: departamentos,
  // B Método que lista un array de apartamentos con un formato establecido
  listarDepartamentos:function(departamentos){
    for (let i=0; i < departamentos.length; i++) {
      const dpto = departamentos[i];  
      const mascotas = dpto.aceptaMascotas == true ? 'Acepta Mascotas':'No Acepta Mascotas';
      const disponibilidad = dpto.disponible == true ? 'Disponible':'Alquilado';
      return ('id:'+dpto.id+',precio $'+dpto.precioAlquiler+',Esta '+disponibilidad+','+dpto.cantidadHabitacion+' Ambientes,'+'Maximo'+dpto.cantidadPersonas+'personas,'+mascotas+','+dpto.propietarios);
    };
  },
  // C Método para filtrar sólo los departamentos disponibles
  departamentosDisponibles: function (departamentos) {
    const dptosDisponibles = [];
    for (let i=0; i < departamentos.length; i++) {
    const dpto = departamentos[i];  
      if (dpto.disponible == true){
        dptosDisponibles.push(dpto);
      }
     };
      return dptosDisponibles;
  },
// D Método para ubicar un apartamento por Id
  buscarPorId: function (departamentos,idDado) {
    for (let i=0; i < departamentos.length; i++) {
    const dpto = departamentos[i];  
      if (dpto.id == idDado){return dpto;}
     };
  },
// E Método para ubicar un departamento por precio
  buscarPorPrecio: function (departamentos,precioDado) {
    const dptosPrecioDado = [];
    for (let i=0; i < departamentos.length; i++) {
      const dpto = departamentos[i];  
      if (dpto.precioAlquiler == precioDado){
        dptosPrecioDado.push(dpto);} else {
          return "No hay apartamento a este precio"
        };
     };
  return this.departamentosDisponibles(dptosPrecioDado);
  },
  // F Método para modificar los precios de alquiler de acuerdo a un porcentaje dado por parámetro
  precioConImpuesto: function (departamentos,porcentaje) {
    const preciosCI = [];
    for (let i=0; i < departamentos.length; i++) {
    const dpto = departamentos[i]; 
    const precio1 = dpto.precioAlquiler;
    dpto.precioAlquiler += precio1*((100+porcentaje)/100); 
    preciosCI.push(dpto.precioAlquiler);
    };
    return preciosCI;
  },
// G Método para cambiar a dueño o dueña directo
  simplificarPropietarios: function (departamentos) {
    const DptoPropCorregido = [];
    for (let i=0; i < departamentos.length; i++) {
    const dpto = departamentos[i]; 
    corregido = dpto.propietarios.replace("Dueño"||"Dueña"||"Dueños"||"Dueñas","Prop."); 
    DptoPropCorregido.push(corregido);
    };
    return DptoPropCorregido;
  }
}

module.exports = {inmobiliaria, departamentos};



