export interface IUser {
    id: string
    email: string
    picture: string
    role: string
    createdAt: string
    address: string
    fullname: string
    country: string
    postalCode: string
    phone: string
}

export interface IUserRole {
    id: string
    role: string
}