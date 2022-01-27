const {Contenedor}= require('./Contenedor')
const express= require('express')
const app= express()


const PORT = 8080
const server= app.listen(PORT, ()=>{
    console.log(`escuchando el servidor en el puerto: ${server.address().port}`)
})

server.on('error',error=>{console.log(`error en el servidor: ${error}`)})

app.get('/',(req,res,next)=>{
    res.send('pagina de inicio')
})
app.get(`/productos`,(req,res,next)=>{
    const getProducts = async ()=>{
        const getProductos= await contenedor.getAll()
        res.json({productos: getProductos})
    }
    getProducts()
})
app.get('/productoRandom',(req,res,next)=>{
    const getRandom=()=>{
        return Math.floor((Math.random()*4)+1)
    }
    const getRandomProduct= async ()=>{
        numeroRandom=getRandom()
        const getProductoRandom =await contenedor.getElementById(numeroRandom)
        res.json({productoRandom: getProductoRandom,
                  numero: numeroRandom })
    }
    getRandomProduct()
})



const contenedor= new Contenedor('./productos.txt')
const producto={
    
    'title': 'nombre del producto',
    'price': 'precio',
    'thumbnail': 'url de la imagen del producto'
}
const ejemplo=async ()=>{
    
    
    
}



/*     try {
        


        respuestaGetAll= await contenedor.getAll()
        console.log(respuestaGetAll)
    } catch (error) {
        console.log(error)        
    } */

/*     console.log('mostrando metodo save')
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
 */
ejemplo()