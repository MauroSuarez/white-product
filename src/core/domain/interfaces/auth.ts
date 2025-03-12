type TRole = 1 | 2

export interface ISignUp {
  email: string
  firstName: string
  lastName: string
  password: string
  userName: string
  roleId: TRole
  terms: boolean
}

export interface ISignIn {
  email: string
  password: string
}