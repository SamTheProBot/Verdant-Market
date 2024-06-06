import mongoose from 'mongoose';
import Product from './model/product';
import dotenv from 'dotenv';
const jsonProducts = require(`../product.json`);
dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS),
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      };
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Success!!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
