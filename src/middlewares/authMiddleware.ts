import { Request, Response, NextFunction } from 'express'

export const mockAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  if (!token || token !== 'Bearer footjobcoin') {
    return res.status(401).json({ message: 'Brak autoryzacji' })
  }

  // „Zalogowany” użytkownik – symulacja
  req.user = { id: 1, name: 'milosz', email: 'footjobcoin@isour.future' }

  next()
}
