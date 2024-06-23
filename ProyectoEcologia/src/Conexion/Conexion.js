import mysql from 'mysql'

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'escuela',
    user: 'root',
    password: '12345678'
})

conexion.connect(function(err) {
    if(err){
        throw err
    }else{
        console.log("Conexión exitosa")
    } 
})

const estudiantes = "SELECT * FROM `estudiantes`"

conexion.query(estudiantes, function(err, lista) {
    if(err){
        throw err
    }else{
        console.log(lista[1])
    }
})

conexion.end()