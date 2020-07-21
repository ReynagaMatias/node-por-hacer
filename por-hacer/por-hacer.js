const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) throw Error('No se grabo la data', err);
        console.log('Se guardo correctamente!');
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };
    listadoPorHacer.push(porHacer);

    return porHacer;
}

const getListado = () => {
    cargarDB()
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    } else {
        //guardarDB()
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let borrar = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (borrar === listadoPorHacer) {
        return false
    } else {
        listadoPorHacer = borrar;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}