import { IsEnum, IsOptional, IsString } from 'class-validator'
import { PaginationDto } from './../../pagination/dto/pagination.dto'
export enum EnumProductsSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export class getAllProductsDto extends PaginationDto {
	@IsOptional()
	@IsEnum(EnumProductsSort)
	sort?: EnumProductsSort

	@IsOptional()
	@IsString()
	searchTerm?: string
}
