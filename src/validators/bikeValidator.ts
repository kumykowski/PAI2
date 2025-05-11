import { body, param, validationResult, ValidationChain } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
      return
    }
    next()
  } catch (error) {
    next(error)
  }
}

export const validateBikeCreation: ValidationChain[] = [
  body('brand').notEmpty().withMessage('Marka jest wymagana'),
  body('model').notEmpty().withMessage('Model jest wymagany'),
  body('type').notEmpty().withMessage('Typ roweru jest wymagany'),
  body('size').notEmpty().withMessage('Rozmiar jest wymagany'),
  body('price').isNumeric().withMessage('Cena musi być liczbą'),
  handleValidationErrors as any
]

export const validateBikeUpdate: ValidationChain[] = [
  body('brand').optional().notEmpty().withMessage('Marka nie może być pusta'),
  body('model').optional().notEmpty().withMessage('Model nie może być pusty'),
  body('type').optional().notEmpty().withMessage('Typ roweru nie może być pusty'),
  body('size').optional().notEmpty().withMessage('Rozmiar nie może być pusty'),
  body('price').optional().isNumeric().withMessage('Cena musi być liczbą'),
  handleValidationErrors as any
]

export const validateBikeId: ValidationChain[] = [
  param('id').isInt().withMessage('Nieprawidłowe ID roweru'),
  handleValidationErrors as any
] 