const express = require('express')
const router = express.Router()

//rutas
router.get('/',(req,res)=>{
    res.render('index.html',{title: "Geeky Shop"})
})

router.get('/juegos',(req,res)=>{
    res.render('juegos.html',{title: "Geeky Games"})
})
router.get('/login',(req,res)=>{
    res.render('login.html',{title: "Iniciar Sesion"})
})

module.exports = router

