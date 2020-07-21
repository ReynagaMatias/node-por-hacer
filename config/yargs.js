const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
}

const completado = {
    default: true,
    demand: true,
    alias: 'c',
    desc: "Marca como completado o pendiente la tarea"
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borra una tarea por hacer', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}