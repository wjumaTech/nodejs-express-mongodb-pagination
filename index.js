import express from 'express'
import mongoose from 'mongoose'

import productRoutes from './routes/product.route.js'

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))

app.use('/products', productRoutes)

mongoose.connect('mongodb+srv://wjumatech:QRpaOBSAgEFQfUQv@cluster0.ky0pvrm.mongodb.net/pagination_app?retryWrites=true')
  .then(client => {

    app.listen(
      3000,
      console.log('Server running on port 3000')
    )

  })