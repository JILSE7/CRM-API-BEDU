import { mostrarAlerta, validar } from './funciones.js'
import { nuevoCliente, token } from './API.js'
(() => {

    //Quedan locales las variables de este archivo
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);
    const contenedor = document.querySelector(".contenedor")


    async function validarCliente(e) {
        e.preventDefault();
        const username = document.querySelector('#username').value,
            email = document.querySelector('#email').value,
            password = document.querySelector('#password').value,
            firstName = document.querySelector('#firstName').value,
            lastName = document.querySelector('#lastName').value,
            phone = document.querySelector('#phone').value,
            location = document.querySelector('#location').value,
            typeOfUser = document.querySelector('#typeOfUser').value,
            profilePhoto = document.querySelector('#profilePhoto').value


        //Object literal handsment
        const cliente = {
            username,
            firstName,
            lastName,
            typeOfUser,
            email,
            password,
            phone: Number(phone),
            location,
            profilePhoto
        }

        if (!validar(cliente)) {
            mostrarAlerta('faltan campos');
            return
        } else if (!cliente.password || cliente.password.length < 8) {
            mostrarAlerta('La contraseña debe tener almenos 8 caracteres');
            return;
        } else if (isNaN(cliente.phone)) {
            mostrarAlerta('Porfavor verifica tu numero, no se aceptan letras ni espacios');
            return;
        }

        console.log(cliente.ProfilePhoto);
        const hola = await nuevoCliente(cliente);

        const p = document.createElement('p');
        p.textContent = hola;
        contenedor.appendChild(p);

        formulario.reset();


        // window.location.href = 'index.html';

    }





})()