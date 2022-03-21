export interface LoginRes {
  user: {
    id: number
    username: string
    role: string
    email: string
  },
  token: string
}
