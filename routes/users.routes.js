const { Router } = require('express')
const router = Router();
const express = require('express')
const path = require('path')

const Publicacion = require('../models/publicaciones');
const PublicacionSchema = require('../models/publicaciones');
/*
let pubs = [
    {
        "titulo": "pub1",
        "descrip": "perritos",
        "fecha": "",
        "src": "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        "titulo": "pub2",
        "descrip": "gatitos",
        "fecha": "",
        "src": "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        "titulo": "pub3",
        "descrip": "elefantes",
        "fecha": "",
        "src": "https://images.pexels.com/photos/3751673/pexels-photo-3751673.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
]*/

const app = express();

router.get('/', (req, resp) => {
    resp.render('home')
})
router.get('/insert-publication', (req, resp) => {
    resp.render('insert-pub')
})

router.post('/get-all-pubs', async (req, resp) => {
    const pubs = await PublicacionSchema.findAll();

    resp.json(pubs)
})
router.post('/insert-pub', async (req, resp) => {
    console.log('insertando pub en bbdd (...)')
    console.log(req.body)
    const { titulo, descripcion, url, fecha } = req.body;
    const publicacion = await Publicacion.create({titulo, descripcion, url, fecha})
    console.log(publicacion)
    //resp.json(pubs)
    resp.json({"insertado": true})
})
//exportacion 
module.exports = router;
