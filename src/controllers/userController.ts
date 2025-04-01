import { Request, Response } from 'express'

export const registerUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body

  const user = { id: Date.now(), name, email }
  res.status(201).json({ message: 'Użytkownik zarejestrowany', user })
}

export const loginUser = (req: Request, res: Response) => {
    const { email, password } = req.body
  
    if (email === 'admin@dupa.com' && password === 'dupa123') {
      return res.status(200).json({ message: 'Zalogowano pomyślnie' })
    }
  
    return res.status(401).json({ message: 'Nieprawidłowy email lub hasło' })
  }
  
  export const getMe = (req: Request, res: Response) => {
    if (!req.user) return res.status(401).json({ message: 'Nieautoryzowany' })
  
    res.json({ user: req.user })
  }
  
  export const updateMe = (req: Request, res: Response) => {
    if (!req.user) return res.status(401).json({ message: 'Brak autoryzacji' })
  
    const { name, email } = req.body
  
    const updatedUser = {
      id: req.user.id,
      name: name || req.user.name,
      email: email || req.user.email
    }
  
    res.status(200).json({ message: 'Dane zaktualizowane', user: updatedUser })
  }
  