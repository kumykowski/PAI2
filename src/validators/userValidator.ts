import { body, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const validateUserRegistration = [
  body('email').isEmail().withMessage('Nieprawidłowy email'),
  body('password').isLength({ min: 6 }).withMessage('Hasło musi mieć min. 6 znaków'),
  body('name').notEmpty().withMessage('Imię jest wymagane'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]

export const validateUserLogin = [
    body('email').isEmail().withMessage('Nieprawidłowy email'),
    body('password').notEmpty().withMessage('Hasło jest wymagane'),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      next()
    }
  ]

  export const validateUserUpdate = [
    body('name').optional().notEmpty().withMessage('Imię nie może być puste'),
    body('email').optional().isEmail().withMessage('Nieprawidłowy email'),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      next()
    }
  ]
  
  