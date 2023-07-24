import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
} from 'class-validator';

export enum Brand {
  UK2 = 'UK2',
  BENEGOV = 'Benegov',
  MSI = 'Motorola Solutions',
  BOOSTER = 'Booster',
}

export class CreateWorkExperienceDto {
  @IsEnum(Brand)
  brand: string;

  @IsNotEmpty()
  title: Brand;

  @IsNotEmpty()
  problem: string;

  @IsNotEmpty()
  description: string;

  @IsUrl()
  url: string;

  @IsNotEmpty()
  myPart: string;

  @IsNotEmpty()
  backgroundImage: string;

  @IsOptional()
  demoText: string;

  @IsBoolean()
  noMobile: boolean;
}
