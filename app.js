'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Name/Nama: Rayner Arlyn Chanarly\n')
    res.send('NIM: 52019027\n')
    res.send('Jurusan: Teknik Informatika\n')
    res.send('Mata Kuliah: Cloud Computing\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
