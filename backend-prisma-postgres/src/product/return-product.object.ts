import { Prisma } from '@prisma/client'
import { returnReviewObject } from 'src/review/return-review.object'
import { returnCategoryObject } from './../category/return-category.object'

export const productReturnObject: Prisma.ProductSelect = {
	images: true,
	description: true,
	id: true,
	name: true,
	price: true,
	createdAt: true,
	slug: true,
	category: { select: returnCategoryObject },
	reviews: {
		select: returnReviewObject
	}
}
