import { Schema, model } from 'mongoose';

const PRODUCT_SCHEMA = new Schema({

  title: String,
  category: String,
  image: String,
  description: String,

})

export default model('Product', PRODUCT_SCHEMA)