import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	//Get All
	@Get('')
	async getAll() {
		return this.categoryService.getAll()
	}

	//Get By Id
	@Get(':id')
	async getById(@Param('id') id: string) {
		return this.categoryService.byId(+id)
	}

	//Get By Slug
	@Get('by-slug/:slug')
	async getBySlug(@Param('slug') slug: string) {
		return this.categoryService.bySlug(slug)
	}

	//Update
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateCategory(@Param('id') id: string, @Body() dto: CategoryDto) {
		return this.categoryService.update(+id, dto)
	}

	//Create
	@HttpCode(200)
	@Post()
	@Auth()
	async createCategory() {
		return this.categoryService.create()
	}

	//Delete
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteCategory(@Param('id') id: string) {
		return this.categoryService.delete(+id)
	}
}
