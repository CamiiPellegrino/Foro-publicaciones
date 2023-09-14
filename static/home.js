import { getAllPubs } from '/static/crud-post.js';
const pubsContainer = document.getElementById('pubs-container')
document.addEventListener('DOMContentLoaded', async () => {
    //pedir datos de todas las publicaciones
    const respuesta = await getAllPubs()
    console.log(respuesta)
    buildPubs(respuesta)
})


function buildPubs (data) {
    /* Formato de data:
     * [{"titulo":"","descrip":"","src":"","fecha":""},{...}]
     */
    const btnAgregarPub = createElement('a', ['pubs', 'btn-agregar-pub'])
    btnAgregarPub.href = "/insert-publication"
    btnAgregarPub.innerText = 'Agregar publicación'
    pubsContainer.appendChild(btnAgregarPub)
    data.forEach((p) => {
        const pub = createElement('div', ['pubs'])
        const pubContent = createElement('div', ['pubs-content-container'])
        pub.appendChild(pubContent)
        pubsContainer.appendChild(pub)

        const headContainer = createElement('div', ['head-container'])
        const titulo = createElement('div', ['titulo'], null, p.titulo)
        const fecha = createElement('div', ['fecha'], null, p.fecha)
        headContainer.appendChild(titulo) 
        headContainer.appendChild(fecha)

        const imgContainer = createElement('div', ['img-container'])
        const img = createElement('img', ['img'])
        img.src = p.url
        img.alt = p.descripcion
        imgContainer.appendChild(img)
        const descrip = createElement('div', ['descrip'], null, p.descripcion)

        pubContent.appendChild(headContainer)
        pubContent.appendChild(imgContainer)
        pubContent.appendChild(descrip)
    })
    

}


function createElement(type, classes, id, innerText) {
    const elem = document.createElement(type)
    if(classes !== null && classes !==undefined) {
        classes.forEach((c) => {
            elem.classList.add(c)
        })
    }
    if(id !== null && id !== undefined) {
        elem.setAttribute('id', id)
    }
    if(innerText) {
        elem.innerText = innerText
    }
    return elem
}