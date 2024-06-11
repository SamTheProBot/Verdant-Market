import mongoose from 'mongoose';
import { Iproducts } from '../types/product';

const ProductSchema = new mongoose.Schema<Iproducts>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: [{ type: String }],
});

export default mongoose.model('ProductSchema', ProductSchema);
