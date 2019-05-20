const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello welcome to HIMS')
})
app.listen(3000, () => {
    console.log('Server is up on 3000')
})