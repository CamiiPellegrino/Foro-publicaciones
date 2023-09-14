import { insertPub } from '/static/crud-post.js';

let currentDate = new Date();
let day = parseInt(currentDate.getDate());
let month = parseInt(currentDate.getMonth());
let year = parseInt(currentDate.getFullYear());
document.getElementById('fecha').value = `${year}-` + (month<10?"0":"")+`${month}-` + (day<10?"0":"")+`${day}`
let formInsert = document.getElementById('form-insert')
formInsert.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = {
        titulo: document.getElementById('titulo').value,
        descripcion: document.getElementById('descrip').value,
        fecha: document.getElementById('fecha').value,
        url: document.getElementById('src').value
    }
    const response = await insertPub(data)
    if(response.insertado) {
        window.location.href = '/';
    }else {
        alert('Ha habido un error al insertar la publicación, por favor intentelo de nuevo')
    }
})