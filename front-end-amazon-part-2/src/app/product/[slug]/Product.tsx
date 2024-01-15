'use client'

import { useQuery } from '@tanstack/react-query'

import Heading from '@/ui/Heading'

import { IProduct } from '@/types/product.interface'

import { ProductService } from '@/services/product/product.service'
import { ProductGallery } from './ProductGallery'
import ProductReviewsCount from './ProductReviewsCount'
import SimilarProducts from './SimilarProducts'
import ProductInformation from './product-information/ProductInformation'
import ProductReviews from './product-reviews/ProductReviews'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

export default function Product({
	initialProduct,
	similarProducts,
	slug = ''
}: IProductPage) {
	const { data: product } = useQuery({
		queryKey: ['get product', initialProduct.id],
		queryFn: () => ProductService.getBySlug(slug),
		initialData: initialProduct,
		enabled: !!slug
	})

	return (
		<>
			<Heading className='mb-1'>{product.name}</Heading>
			<ProductReviewsCount product={product} />
			<div
				className='grid gap-12 mt-6'
				style={{
					gridTemplateColumns: '1fr 1fr 1fr'
				}}
			>
				<ProductGallery images={product.images} />
				<div className='opacity-80 font-light'>
					<div className='font-semibold mb-1'>Description:</div>
					{product.description}
				</div>
				<ProductInformation product={product} />
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</>
	)
}
