import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { CreateBikeDto } from '../dtos/bike.dto';

export const validateCreateBike = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {  // Funkcja musi zwracać void
  const dto = plainToInstance(CreateBikeDto, req.body);
  const errors = await validate(dto);

  if (errors.length > 0) {
    // Zamiast zwracać Response, bezpośrednio wysyłasz odpowiedź
    res.status(400).json({
      errors: errors.map(err => ({
        property: err.property,
        errors: Object.values(err.constraints || {}),
      })),
    });
  }

  // Przekazujesz sterowanie do następnego middleware
  next();
};
