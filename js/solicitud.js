import { getSolicitud, eliminarSoli } from './API.js'
(() => {

    const listadoSolicitud = document.querySelector('#listado-solicitud');


    document.addEventListener('DOMContentLoaded', mostrarSolicitudes);

    listadoSolicitud.addEventListener('click', confirmarEliminar)

    async function mostrarSolicitudes() {
        const solicitudes = await getSolicitud();
        console.log(solicitudes);
        solicitudes.forEach(solicitud => {

            console.log(solicitud.carId);
            const { make, model, version, year, price, photos, mileage, _id, chasisType } = solicitud.carId[0]
            const { username: usuaio, firstName: nombre, lastName: apellido, email: mail, profilePhoto: foto, location: pais } = solicitud.advertiserId[0];
            const { username, firstName, lastName, email, profilePhoto } = solicitud.compradorId[0];
            console.log(email);
            console.log(photos);
            console.log(username);
            console.log(solicitud._id);
            const row = document.createElement('tr');
            row.innerHTML += `

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                            <h4 class="solicitud-id">${solicitud._id} </h4>
                    </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <div class="info-auto">
                         <img class ="img-auto" src=${photos}>
                         <div>
                         <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold">Marca: ${make} </p> 
                         <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Modelo:</span>${model}</p>
                         <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Tipo:</span> ${chasisType}</p>
                         <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Año:</span> ${year}</p>
                         <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Kilometros:</span> ${mileage}</p>
                         <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Version:</span>${version}</p>
                         </div>
                    </div>
                </td>
                <td class="hola py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="fotoperfil">
                    <img class ="img-perfil" src=${foto}>
                    </div>
                    <div>
                    <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Name:</span>${nombre}${apellido}</p>
                    <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Email:</span> ${mail}</p>
                    </div>   
                </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                 <div class="fotoperfil">
                    <img class ="img-perfil" src=${profilePhoto}>
                 </div>
                <div>
                    <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Name:</span>${firstName}${lastName}</p>
                    <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Email:</span> ${email}</p>
                </div>   
            </td>
            <td class="py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-10 text-gray-700 font-bold">${(solicitud.status =='in-deal')?'En negociacion': (solicitud.status== 'done')?'Cerrado': 'Cancelado'}</p>
                    <a href="editarsoli.html?id=${solicitud._id}" class="text-teal-600 hover:text-teal-900 mr-5 id">Editar</a>
                    <a href="#" data-cliente="${solicitud._id}" class="text-red-600 hover:text-red-900 boton id eliminar">Eliminar</a>
            </td>

                    `

            listadoSolicitud.appendChild(row)

        });
    }


    function confirmarEliminar(e) {

        let id;
        (e.target.classList.contains('id')) ? id = e.target.dataset.cliente: console.log('no;');
        console.log(id);
        if (e.target.classList.contains('eliminar')) {
            console.log('hola');
            const confirmar = confirm('Deseas elminar este cliente?');
            if (confirmar) {
                eliminarSoli(id)

            }
        }
        setTimeout(() => {
            window.location.reload()
        }, 1000);

    }




})()