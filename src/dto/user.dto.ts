import { IsString, IsNumber, IsDefined } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsDefined()
  name: string;

  @IsNumber()
  id: number;
}
