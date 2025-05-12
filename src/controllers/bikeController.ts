import { Request, Response } from 'express';

let bikes: { id: number, model: string, brand: string, price: number }[] = [];
let bikeIdCounter = 1;

export const createBike = (req: Request, res: Response): void => {
  const { model, brand, price } = req.body;
  const newBike = { id: bikeIdCounter++, model, brand, price };
  bikes.push(newBike);
  res.status(201).json(newBike);
};

export const getBikes = (req: Request, res: Response): void => {
  res.json(bikes);
};

export const getBikeById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const bike = bikes.find(b => b.id === parseInt(id));
  if (!bike) {
    res.status(404).json({ message: 'Bike not found' });
    return;
  }
  res.json(bike);
};

export const updateBike = (req: Request, res: Response): void => {
  const { id } = req.params;
  const bike = bikes.find(b => b.id === parseInt(id));
  if (!bike) {
    res.status(404).json({ message: 'Bike not found' });
    return;
  }
  const { model, brand, price } = req.body;
  if (model) bike.model = model;
  if (brand) bike.brand = brand;
  if (price) bike.price = price;
  res.json(bike);
};

export const deleteBike = (req: Request, res: Response): void => {
  const { id } = req.params;
  const index = bikes.findIndex(b => b.id === parseInt(id));
  if (index === -1) {
    res.status(404).json({ message: 'Bike not found' });
    return;
  }
  bikes.splice(index, 1);
  res.status(204).send();
};
