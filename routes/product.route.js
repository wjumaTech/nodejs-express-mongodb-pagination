import { Router } from 'express'
const router = Router()

import { getProducts, getCreateProduct, postCreateProduct, getCreateFaker, postCreateFaker, getProductsPagination } from '../controllers/product.controller.js'

router.get('/', getProducts)

router.route('/create')
  .get(getCreateProduct)
  .post(postCreateProduct)


router.route('/create-faker')
  .get(getCreateFaker)
  .post(postCreateFaker)

router.get('/:page', getProductsPagination)

export default router