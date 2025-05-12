import { Request, Response, NextFunction } from 'express'

export const validateBike = (req: Request, res: Response, next: NextFunction) => {
  const { model, brand, price } = req.body

  if (!model || typeof model !== 'string') {
    return res.status(400).json({ error: 'Nieprawidłowy model' })
  }

  if (!brand || typeof brand !== 'string') {
    return res.status(400).json({ error: 'Nieprawidłowa marka' })
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Nieprawidłowa cena' })
  }

  next()
}
