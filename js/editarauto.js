import { obtenerAutoId, editarAuto } from './API.js'
import { mostrarAlerta, validar } from './funciones.js'


(() => {
    let idAuto;
    const inputmake = document.querySelector('#make'),
        inputmodel = document.querySelector('#model'),
        inputversion = document.querySelector('#version'),
        inputyear = document.querySelector('#year'),
        inputmileage = document.querySelector('#mileage'),
        inputdrivetrain = document.querySelector('#drivetrain'),
        inputchasisType = document.querySelector('#chasisType'),
        inputcolor = document.querySelector('#color'),
        inputdescription = document.querySelector('#description'),
        inputprice = document.querySelector('#price'),
        inputadvertiserId = document.querySelector('#advertiserId'),
        inputphotos = document.querySelector('#photos');

    document.addEventListener('DOMContentLoaded', async() => {
        //1.-extrayendo el id de la url con urlsearch y get
        const parametrosURL = new URLSearchParams(window.location.search);
        idAuto = parametrosURL.get('id');
        console.log(idAuto);

        const auto = await obtenerAutoId(idAuto);
        console.log(auto);

        //2.-mostrar el cliente ya que lo tengamos
        mostrar(auto);
        // //3.-validar el cliente
        formulario.addEventListener('submit', validarAuto)

    });


    function mostrar(auto) {

        const { make, model, version, year, price, photos, mileage, drivetrain, color, description, chasisType, _id } = auto
        console.log(chasisType);
        let { _id: id } = auto.advertiserId[0];
        console.log(chasisType);
        console.log(_id);
        inputmake.value = make
        inputmodel.value = model
        inputversion.value = version
        inputyear.value = year
        inputprice.value = price
        inputphotos.value = photos
        inputmileage.value = mileage
        inputdrivetrain.value = drivetrain
        inputcolor.value = color
        inputdescription.value = description
        inputchasisType.value = chasisType;
        inputadvertiserId.value = id


    }

    function validarAuto(e) {
        e.preventDefault();
        //Object literal handsment

        const auto = {
            make: inputmake.value,
            model: inputmodel.value,
            version: inputversion.value,
            year: inputyear.value,
            mileage: inputmileage.value,
            drivetrain: inputdrivetrain.value,
            chasisType: inputchasisType.value,
            color: inputcolor.value,
            description: inputdescription.value,
            price: Number(inputprice.value),
            advertiserId: inputadvertiserId.value,
            photos: inputphotos.value,
            _id: idAuto
        }




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

        console.log(auto);

        //rescribe el objeto
        editarAuto(auto);

    }

})();