'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama : Ryu Wilsal\n')
    res.send('NIM : 52019033\n')
    res.send('Jurusan : TI-2019\n')
})))

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
