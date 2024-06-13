import express, { Router } from 'express';
import { addItem, editItem, removeItem, getItem } from '../controller/cart';
import { cheakout } from '../controller/cheakout';
import { AuthMiddleware } from '../middleware/authMiddleware';

export const cartRoute: Router = express.Router();

cartRoute.get('/getitem', AuthMiddleware, getItem);
cartRoute.post('/additem', AuthMiddleware, addItem);
cartRoute.patch('/edititem', AuthMiddleware, editItem);
cartRoute.delete('/removeitem', AuthMiddleware, removeItem);

cartRoute.post(`/cheakout`, AuthMiddleware, cheakout);
