import { obtenerSolicitudId, editarSoli } from './API.js'
import { mostrarAlerta, validar } from './funciones.js'


(() => {

    let idSolicitud;
    const advertiserId = document.querySelector('#advertiserId'),
        compradorId = document.querySelector('#compradorId'),
        status = document.querySelector('#status'),
        carId = document.querySelector('#carId');

    document.addEventListener('DOMContentLoaded', async() => {
        //1.-extrayendo el id de la url con urlsearch y get
        const parametrosURL = new URLSearchParams(window.location.search);
        idSolicitud = parametrosURL.get('id');

        console.log(idSolicitud);
        const solicitud = await obtenerSolicitudId(idSolicitud);
        console.log(solicitud);
        //2.-mostrar el cliente ya que lo tengamos
        mostrarSolicitud(solicitud);
        //3.-validar el cliente
        formulario.addEventListener('submit', validarSolicitud)

    });


    function mostrarSolicitud(solicitud) {
        console.log(solicitud.advertiserId[0]);
        advertiserId.value = solicitud.advertiserId[0];
        compradorId.value = solicitud.advertiserId[0];
        status.value = solicitud.status;
        carId.value = solicitud.carId[0];
    }

    function validarSolicitud(e) {
        e.preventDefault();
        //Object literal handsment
        const solicitud = {
            advertiserId: advertiserId.value,
            compradorId: compradorId.value,
            status: status.value,
            carId: carId.value,
        }

        console.log(solicitud);



        if (!validar(solicitud)) {
            mostrarAlerta('faltan campos');
            return
        }

        //rescribe el objeto
        editarSoli(solicitud, idSolicitud);


    }

})();