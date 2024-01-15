import { IsEmail, IsOptional, IsString } from 'class-validator'

export class UserDto {
	@IsOptional() // Возможно должно быть пусто
	@IsEmail()
	email: string

	@IsOptional()
	@IsString()
	password?: string

	@IsOptional()
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	avatarPath: string

	@IsString()
	@IsOptional()
	phone?: string
}
