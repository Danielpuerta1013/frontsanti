export async function consultarLogistica() {
    //1 construir el endpoint
   
    const URL = "http://localhost/logistica";
    //2. activar la peticion
   
    let peticion={
      method: 'GET',
    }
    //3. activo el consumo de la peticion
   
    let respuesta = await fetch(URL, peticion);
    let logisticaConsultada = await respuesta.json();
   
    return logisticaConsultada;
   
   }