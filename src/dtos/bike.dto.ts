import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateBikeDto {
  @IsNotEmpty({ message: 'Model jest wymagany' })
  model: string = '';  

  @IsNotEmpty({ message: 'Marka jest wymagana' })
  brand: string = '';  

  @IsNumber({}, { message: 'Cena musi być liczbą' })
  @IsPositive({ message: 'Cena musi być większa od 0' })
  price: number = 0;  
}
