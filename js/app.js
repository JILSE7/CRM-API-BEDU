import { obtenerClientes, eliminarCliente } from './API.js'

(() => {
    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarClientes);

    listado.addEventListener('click', confirmarEliminar);


    async function mostrarClientes() {
        const clientes = await obtenerClientes()
        clientes.forEach(cliente => {
            const { username, firstName, lastName, email, phone, typeOfUser, _id, profilePhoto } = cliente
            console.log(profilePhoto);
            console.log(_id);
            const row = document.createElement('tr');
            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <div class ="">
                    <img class="user"src=${profilePhoto}>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                 <p class="text-sm leading-10 text-gray-500">Username</p>
                 <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${username} </p> 
                 <p class="text-sm leading-10 text-gray-500">iD</p>
                 <p class="text-sm leading-10 text-gray-700">${_id}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-10 text-gray-500">Name</p>
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${firstName} ${lastName} </p> 
                <p class="text-sm leading-10 text-gray-500">Email</p>
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${email} </p>        
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${phone}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-700">${typeOfUser}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${_id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${_id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
            `;

            listado.appendChild(row)
        });
    };

    function confirmarEliminar(e) {

        // if (e.target.classList.contains('eliminar')) {
        //     const id = e.target.dataset.cliente
        //     console.log(id);
        //     const confirmar = confirm('Deseas elminar este cliente?');
        //     if (confirmar) {
        //         const token = prompt('ingresa tu token');
        //         console.log(token);
        //         eliminarCliente(id, token)


        //     }
        // }

    }





})()