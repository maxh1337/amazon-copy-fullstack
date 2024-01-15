import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegisterDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 character long'
	})
	@IsString()
	password: string

	@IsString({
		message: 'Name must be string'
	})
	@MinLength(3, {
		message: 'Name must be at least 3 character long'
	})
	name: string

	/*Нужно будет в реальном проекте

	@IsString()
	avatarPath: string

	@IsPhoneNumber()
	phone: number */
}
