import { useQuery, UseQueryOptions } from 'react-query'
import { api } from '../api'

type User = {
  createdAt: string
  email: string
  id: string
  name: string
}

type GetUsersResponse = {
  totalCount: number
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  })
  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return {
      createdAt: new Date(user.created_at).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      email: user.email,
      id: user.id,
      name: user.name,
    }
  })

  return { users, totalCount }
}

export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...options,
  })
}
