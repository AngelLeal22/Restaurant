function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} ` )
        setTimeout(() => {
            if (producto === "Limonada") {
                resolve("Una Limonada🍹");
            }else{
                reject("este producto no esta disponible")
            }
        }, 2000);
    })
    
}
function ordenarProducto2(product2) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${product2} ` )
        setTimeout(() => {
            if (product2 === "Pizza") {
                resolve("Una Pizza🍕");
            }else{
                reject("este producto no esta disponible")
            }
        }, 2000);
    })
    
}

function ordenarProducto3(product3) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${product3} ` )
        setTimeout(() => {
            if (product3 === "Postre") {
                resolve("Un Postre🍨");
            }else{
                reject("este producto no esta disponible")
            }
        }, 2000);
    })
    
}




function procesarPedido(respuesta) {
    return new Promise(resolve => {
        console.log("procesando Orden...");
        console.log(` Su orden es: "${respuesta}"` )
        setTimeout(() => {
            resolve("Orden Completa,¡Buen provecho!")
        },3000);

    })
    
}


// uso de await y async
// esto es lo mismo pero con await y async(todas las funciones que comienzan con esto al princio retornan una promesa)

 async function realizarPedido (producto,product2,product3) {
    try {
        const respuesta = await ordenarProducto (producto)
        const respuesta2 = await ordenarProducto2(product2)
        const respuesta3 = await ordenarProducto3(product3)
        console.log("respuesta recibida")
        const respuestaProcesada = await procesarPedido(respuesta)
         const respuestaProcesada2 = await procesarPedido(respuesta2)
         const respuestaProcesada3 = await procesarPedido(respuesta3)
        console.log(respuestaProcesada)
        
        
    } catch (error) {
        console.log(error)
        
    }
    
}





