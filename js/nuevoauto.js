import { mostrarAlerta, validar } from './funciones.js'
import { nuevoAuto } from './API.js'
(() => {

    //Quedan locales las variables de este archivo
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarAuto);
    const contenedor = document.querySelector(".contenedor")



    async function validarAuto(e) {
        e.preventDefault();
        const make = document.querySelector('#make').value,
            model = document.querySelector('#model').value,
            version = document.querySelector('#version').value,
            year = document.querySelector('#year').value,
            mileage = document.querySelector('#mileage').value,
            drivetrain = document.querySelector('#drivetrain').value,
            chasisType = document.querySelector('#chasisType').value,
            color = document.querySelector('#color').value,
            description = document.querySelector('#description').value,
            price = document.querySelector('#price').value,
            advertiserId = document.querySelector('#advertiserId').value,
            photos = document.querySelector('#photos').value;



        //Object literal handsment
        const auto = {
            make,
            model,
            version,
            year,
            mileage,
            drivetrain,
            chasisType,
            color,
            description,
            price: Number(price),
            advertiserId,
            photos
        }
        console.log(auto);

        if (!validar(auto)) {
            mostrarAlerta('faltan campos');
            return
        } else if (!auto.make || auto.model < 8) {
            mostrarAlerta('Modelo y año requeridos');
            return;
        } else if (isNaN(auto.year)) {
            mostrarAlerta('Porfavor verifica el año, no se aceptan letras ni espacios');
            return;
        } else if (isNaN(auto.mileage)) {
            mostrarAlerta('Porfavor verifica el kilometraje, no se aceptan letras ni espacios');
        } else if (isNaN(auto.price)) {
            mostrarAlerta('Porfavor verifica el precio, no se aceptan letras ni espacios');
        }

        nuevoAuto(auto);
        formulario.reset();
        setTimeout(() => {
            window.location.href = 'autos.html';
        }, 1000);


    }





})()