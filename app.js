const express = require('express')
const productsRouter = require('./app/app.js')
const errors = require('./errors/errors')

const app = express()
const PORT = 8081

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/productos', productsRouter)
app.use(express.static('public'))
app.use(errors)

app.listen(PORT, () => {
  console.log(`Open server on port ${PORT}`)
})