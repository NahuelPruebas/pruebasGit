const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Buen dia!!! hoy es lunes!!')
})

app.listen(port, () => {
  console.log(`Esto lo va a escuchar en http://localhost:${port}`)
})