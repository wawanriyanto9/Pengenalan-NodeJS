/di sini masih belum nyambung 100%  setengah nya ikut ngetik aja, mau liat rekaman zoon ulang belum di upload jaga 
//perjam 23:21 09 oktober 2020
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/about', function(req, res, next) {
    console.log(req.query)
    res.send({ success: true, keyword: req.query.keyword })
})

app.get('txt-response', function(req, res, next) {
    res.sent("hello jagad dunia!")
})

app.get('/product/:productId', function(req, res, next) {

})

app.get('/category/:productCategory/product/:productId', (req, res, next) => {
    res.send(req.params)
})

app.get('/error', (req, res, next) => {
    next(new Error(' error'))
})

app.get('/multi-handler', function(req, res, next) {
    if (req.query.keyword === 'satu') {
        return next()
    }

    return res.send('Keyword harus 1')
}, function(req, res, next) {
    //handle request
    res.send('Sukses')
})

app.get('/index', (req, res, next) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/pdf', (req, res, next) => {
    res.download(__dirname + '/tugas.pdf', 'Tugas.pdf')
})

app.get('/pelatihan', function(req, res, next) {
    res.render('contoh', { subBab: req.query.subBab })
})

app.use((err, req, res, next) => {
    console.error(err)
    res.send('bos error')
})

app.listen(9191, function() {
    console.log('App jalan di 9191')
}) 