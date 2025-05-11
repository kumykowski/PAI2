import { Request, Response, NextFunction } from 'express'

export const mockAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization

    if (!token || token !== 'Bearer footjobcoin') {
      res.status(401).json({ message: 'Brak autoryzacji' })
      return
    }

    // „Zalogowany” użytkownik – symulacja
    req.user = { id: 1, name: 'milosz', email: 'footjobcoin@isour.future' }

    next()
  } catch (error) {
    next(error)
  }
}
