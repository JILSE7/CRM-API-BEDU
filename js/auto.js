import { getAutos, eliminarAuto } from './API.js'
(() => {

    const listadoAutos = document.querySelector('#listado-autos');
    console.log(listadoAutos);

    document.addEventListener('DOMContentLoaded', mostrarAutos);

    listadoAutos.addEventListener('click', confirmarEliminar)

    async function mostrarAutos() {
        const autos = await getAutos();
        console.log(autos);
        autos.forEach(auto => {
            const { make, model, version, year, price, photos, mileage, _id, chasisType } = auto
            const { username, firstName, lastName, email, phone, profilePhoto, location } = auto.advertiserId[0];
            console.log(phone);
            console.log(photos);
            const row = document.createElement('tr');
            row.innerHTML += `
   
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <div class ="">
                    <img class="auto" src=${photos}>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                 <p class="text-sm leading-10 text-gray-500">Marca</p>
                 <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${make} </p> 
                 <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Modelo:</span>${model}</p>
                 <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Precio:</span> $${price}</p>
                 <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Tipo:</span> ${chasisType}</p>
                 <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Año:</span> ${year}</p>
                 <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Kilometros:</span> ${mileage}</p>
                 <p class="text-sm leading-10 text-gray-700 font-bold"><span class="info">Version:</span>${version}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
             <div class ="w-0.5">
             <img class ="autos" src=${profilePhoto}>
             </div>
            <p class="text-sm leading-10 text-gray-500">username</p>
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${username}</p> 
                <p class="text-sm leading-10 text-gray-500">Name</p>
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${firstName} ${lastName} </p>      
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-sm leading-10 text-gray-500">Correo</p>
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${email}</p> 
            <p class="text-sm leading-10 text-gray-500">Telefono</p>
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${phone}</p> 
            </td>
            <td class="px-6 pr-5 pl-5 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <div class="botones">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${location}</p> 
                <a href="editarauto.html?id=${_id}" class="text-teal-600 hover:text-teal-900 mr-5 id">Editar</a>
                <a href="#" data-cliente="${_id}" class="text-red-600 hover:text-red-900 boton id eliminar">Eliminar</a>
            </div>
            </td>
            `

            listadoAutos.appendChild(row)

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
                eliminarAuto(id)

            }
        }

        setTimeout(() => {
            window.location.reload()
        }, 1000);

    }




})()