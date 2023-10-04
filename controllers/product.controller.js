import Product from '../models/product.model.js'
import { faker } from '@faker-js/faker'

export const getProducts = (req, res, next) => {
  Product.find()
    .then(products => {

      res.render('product/product-list', {
        products
      })
    })
}

// PAGINATION
export const getProductsPagination = (req, res, next) => {

  let perPage = 9
  let page = +req.params.page || 1
  let totalItems;


  Product.find({})
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Product.find()
        .skip((perPage * page) - perPage)
        .limit(perPage)
    })
    .then(products => {
      res.render('product/product-list', {
        products,
        current: page,
        pages: Math.ceil(totalItems / perPage)
      })
    })
    .catch(err => {
      return next(new Error(err))
    })

}

export const getCreateProduct = (req, res, next) => {
  res.render('product/create-product')
}

export const postCreateProduct = (req, res, next) => {
  const product = new Product(req.body)
  product.save()
    .then(productDoc => {
      res.redirect('/products')
    })
}


export const getCreateFaker = (req, res, next) => {
  res.render('product/create-faker-product')
}

export const postCreateFaker = (req, res, next) => {

  for (let i = 0; i <= req.body.quantity; i++) {
    const product = new Product()
    product.title = faker.commerce.productName()
    product.category = faker.commerce.productMaterial()
    product.image = faker.image.avatar()
    product.description = faker.commerce.productDescription()
    product.save()
      .then(() => {

      })
      .catch(err => {
        throw new Error(err)
      })
  }
  res.redirect('/products')
}