const {Contenedor}= require('./Contenedor')

const contenedor= new Contenedor('./productos.txt')
const producto={

    'title': 'nombre del producto',
    'price': 'precio',
    'thumbnail': 'url de la imagen del producto'
}
/* contenedor.save(producto)
 */
const ejemplo=async ()=>{

    console.log('mostrando metodo save')
    respuesta= await contenedor.save(producto)
    respuesta= await contenedor.save(producto)
    respuesta= await contenedor.save(producto)
    respuesta= await contenedor.getAll
    console.log('probando metodo getElementById')
    respuesta= await contenedor.getElementById(1)
    console.log('probando el metodo deleteById')
    respuesta= await contenedor.deleteById(1)
    respuesta= await contenedor.getAll()
    console.log('probando el metodo deleteAll')
    respuesta= await contenedor.deleteAll()
    respuesta= await contenedor.getAll()
    console.log('ejemplo terminado')
}
ejemplo()