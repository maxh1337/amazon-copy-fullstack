/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'loremflickr.com/**'
			},
			{
				protocol: 'https',
				hostname: 'avatars.mds.yandex.net/**'
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos/**'
			},
			{
				protocol: 'https',
				hostname: 'www.aptronixindia.com/**'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com/**'
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
