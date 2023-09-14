export const getAllPubs = async () => {
    let datosFinales;
    /*const response = */await fetch('/get-all-pubs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((respuesta) => {
        datosFinales = respuesta.json()
    })
    .catch(function(err) {
        console.log('error', err)
    })
    //const datos = await response.json()
    return datosFinales;
}


export const insertPub = async (data) => {
    let datosFinales;

    await fetch('/insert-pub', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((respuesta) => {
        console.log(respuesta)
        datosFinales = respuesta.json()
    })
    .catch(function(err) {
        console.log('error', err)
    })
    //const datos = await response.json()
    return datosFinales;
}