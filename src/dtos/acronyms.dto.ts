import { IsString } from 'class-validator';

export class CreateAcronymDto {
  @IsString()
  public acronym: string;

  @IsString()
  public definition: string;
}
