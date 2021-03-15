import { mostrarAlerta, validar } from './funciones.js'
import { nuevoSoli } from './API.js'
(() => {

    //Quedan locales las variables de este archivo
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarSoli);
    const contenedor = document.querySelector(".contenedor")



    async function validarSoli(e) {
        e.preventDefault();
        const advertiserId = document.querySelector('#advertiserId').value,
            compradorId = document.querySelector('#compradorId').value,
            status = document.querySelector('#status').value,
            carId = document.querySelector('#carId').value;


        //Object literal handsment
        const solicitud = {
            advertiserId,
            compradorId,
            status,
            carId
        }
        console.log(solicitud);

        if (!validar(solicitud)) {
            mostrarAlerta('faltan campos');
            return
        }

        nuevoSoli(solicitud);
        formulario.reset();
        setTimeout(() => {
            window.location.href = 'solicitudes.html';
        }, 1000);


    }





})()