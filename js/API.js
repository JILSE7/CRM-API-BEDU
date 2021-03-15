const url = 'https://team8-api.herokuapp.com/v1';

export let token;
import { mostrarAlerta } from './funciones.js'

export const nuevoCliente = async(cliente) => {
    try {
        const respuesta = await (await fetch(`${url}/user`, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'

            }
        })).json()
        token = respuesta.token;
        console.log(token);
        return token;
    } catch (error) {
        console.log(error);
        mostrarAlerta(`Usuario y/o email existentes`)
    }
}


//Obtiene los elementos de nuestra API GET
export const obtenerClientes = async() => {
    try {
        const clientes = await (await fetch(`${url}/user`, {})).json();
        console.log(clientes);
        console.log(clientes.lastName);
        return clientes;
    } catch (error) {
        console.log(error);
    }
}


//Elimina un cliente
export async function eliminarCliente(id, token) {
    console.log(token);
    try {
        await fetch(`${url}/${id}}`, {
            method: 'DELETE',
            Authorization: `Bearer ${token}`
        })
        console.log('cliente eliminado');
    } catch (error) {
        console.error(error);
    }
}

//obtiene un cliente por su id
export const obtenerClienteId = async(id) => {
    try {
        const cliente = await (await fetch(`${url}/${id}`)).json();
        return cliente;
    } catch (error) {
        console.log('error');
    }

}

//actualiza un registro
export const editarCliente = async(cliente) => {
    const { id } = cliente
    try {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}




//Obteniendo todos los autos
export const getAutos = async() => {
    try {
        const autos = await (await fetch(`${url}/car/`)).json()
        return autos
    } catch (error) {
        console.log(error);
    }
}


export const nuevoAuto = async(auto) => {
    try {
        const respuesta = await (await fetch(`${url}/car`, {
            method: 'POST',
            body: JSON.stringify(auto),
            headers: {
                'Content-Type': 'application/json'

            }
        })).json()
        console.log(respuesta);
        return respuesta
        return token;
    } catch (error) {
        console.log(error);
        mostrarAlerta(`Algo salio mal`)
    }
}



//obtiene un cliente por su id
export const obtenerAutoId = async(id) => {
    try {
        const auto = await (await fetch(`${url}/car/${id}`)).json();
        return auto;
    } catch (error) {
        console.log('error');
    }

}


//actualiza un registro
export const editarAuto = async(auto) => {
    const { _id } = auto
    console.log(_id);
    try {
        await fetch(`${url}/car/${_id}`, {
            method: 'PUT',
            body: JSON.stringify(auto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'autos.html'
    } catch (error) {
        console.log(error);
    }
}


//Elimina un cliente
export async function eliminarAuto(id) {
    try {
        await fetch(`${url}/car/${id}`, {
            method: 'DELETE'
        })
        console.log('cliente eliminado');
    } catch (error) {
        console.error(error);
    }
}




//Obteniendo todos los autos
export const getSolicitud = async() => {
    try {
        const solicitud = await (await fetch(`${url}/pucharse/`)).json()
        return solicitud
    } catch (error) {
        console.log(error);
    }
}


//obtiene un cliente por su id
export const obtenerSolicitudId = async(id) => {
    try {
        const solicitud = await (await fetch(`${url}/pucharse/${id}`)).json();
        return solicitud;
    } catch (error) {
        console.log('error');
    }

}



export const nuevoSoli = async(solicitud) => {
    try {
        const respuesta = await (await fetch(`${url}/pucharse`, {
            method: 'POST',
            body: JSON.stringify(solicitud),
            headers: {
                'Content-Type': 'application/json'

            }
        })).json()
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.log(error);
        mostrarAlerta(`Algo salio mal`)
    }
}



//actualiza un registro
export const editarSoli = async(solicitud, id) => {
    try {
        await fetch(`${url}/pucharse/${id}`, {
            method: 'PUT',
            body: JSON.stringify(solicitud),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('actualizado');
        window.location.href = 'solicitudes.html'
    } catch (error) {
        console.log(error);
    }
}



//Elimina un cliente
export async function eliminarSoli(id) {
    try {
        await fetch(`${url}/purcharse/${id}`, {
            method: 'DELETE'
        })
        console.log('solicitud eliminado');
    } catch (error) {
        console.error(error);
    }
}