import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user.service'
import { useAuth } from './useAuth'

export function useProfile() {
	const { user } = useAuth()

	const { data } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		enabled: !!user
	})

	return {
		profile: data
	}
}
