import { Request, Response, NextFunction } from 'express'

// Symulacja bazy danych
let bikes: any[] = []

export const createBike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { brand, model, type, size, price } = req.body
    
    const newBike = {
      id: Date.now(),
      brand,
      model,
      type,
      size,
      price,
      createdAt: new Date()
    }
    
    bikes.push(newBike)
    res.status(201).json({ message: 'Rower dodany pomyślnie', bike: newBike })
  } catch (error) {
    next(error)
  }
}

export const getBikes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.json({ bikes })
  } catch (error) {
    next(error)
  }
}

export const getBikeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const bike = bikes.find(b => b.id === parseInt(req.params.id))
    
    if (!bike) {
      res.status(404).json({ message: 'Rower nie znaleziony' })
      return
    }
    
    res.json({ bike })
  } catch (error) {
    next(error)
  }
}

export const updateBike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { brand, model, type, size, price } = req.body
    const bikeId = parseInt(req.params.id)
    
    const bikeIndex = bikes.findIndex(b => b.id === bikeId)
    
    if (bikeIndex === -1) {
      res.status(404).json({ message: 'Rower nie znaleziony' })
      return
    }
    
    bikes[bikeIndex] = {
      ...bikes[bikeIndex],
      brand: brand || bikes[bikeIndex].brand,
      model: model || bikes[bikeIndex].model,
      type: type || bikes[bikeIndex].type,
      size: size || bikes[bikeIndex].size,
      price: price || bikes[bikeIndex].price,
      updatedAt: new Date()
    }
    
    res.json({ message: 'Rower zaktualizowany', bike: bikes[bikeIndex] })
  } catch (error) {
    next(error)
  }
}

export const deleteBike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const bikeId = parseInt(req.params.id)
    const bikeIndex = bikes.findIndex(b => b.id === bikeId)
    
    if (bikeIndex === -1) {
      res.status(404).json({ message: 'Rower nie znaleziony' })
      return
    }
    
    bikes = bikes.filter(b => b.id !== bikeId)
    res.json({ message: 'Rower usunięty pomyślnie' })
  } catch (error) {
    next(error)
  }
} 