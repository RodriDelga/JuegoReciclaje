import mysql from 'mysql'

/**
 * Esto se conecta a la base de datos pero
 * no es tan importante ya que solo verifica
 * la conexión y muestra datos de la tabla
 */

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