import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/Car';
import CarService from '../services/CarService';
import validateId from '../middlewares/validateId';

const route = Router();
 
const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));
route.get(
  '/cars/:id',
  validateId,
  (req, res) => carController.readOne(req, res),
);

export default route;