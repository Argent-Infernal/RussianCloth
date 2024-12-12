import { IProduct } from "./product.interface"
import { IUser } from "./user.interface"

interface IAmout {
    value: string 
    currency: string 
}

interface IRecipient {
    account_id: string
    gateway_id: string
}

interface IPaymentMethod {
    type: string
    id: string 
    saved: boolean
}

interface IConfirmation {
    type: string
    return_url: string
    confirmation_url: string
}

export interface IPaymentResponse {
    id: string
    status: string
    amount: IAmout
    recipient: IRecipient
    payment_method: IPaymentMethod
    created_at: Date
    confirmation: IConfirmation
}


export interface IOrder {
    id: string
    createdAt: string
    status?: EnumOrderStatus
    items: IOrderItem[]
    total: number
    user: IUser

    address:string
    fullname:string
    country:string
    postalCode:string
    phone:string
    shopmethod: EnumShopMethods
}

export interface IOrderItem {
    quantity: number 
    price: number 
    productId: string 
}

export interface IOrderItemWithProduct extends IOrderItem {
    product?: IProduct;
}

export enum EnumShopMethods {
    CDEK = 'CDEK',
    RUSSIAMAIL = 'RUSSIAMAIL'
}

export interface IOrderStatus {
    id: string
    status: string
}

export const shippingPrices = {
    [EnumShopMethods.CDEK]: 500,
    [EnumShopMethods.RUSSIAMAIL]: 300
};

export const shopMethodToNumberMap = {
    [EnumShopMethods.CDEK]: 0,
    [EnumShopMethods.RUSSIAMAIL]: 1,
};

export enum EnumOrderStatus {
    PENDING = 'Pending',
    PAYED = 'Payed',
    SENT = 'Sent',
    CANCELLED = 'Cancelled',
    ACCEPTED = 'Accepted',
    DONE = 'Done'
}

export const enumsStatus = {
    'PENDING': 'Ожидание оплаты',
    'PAYED': 'Оплачено',
    'SENT': 'Отправлено',
    'CANCELLED': 'Отменено',
    'ACCEPTED': 'Принято в обработку',
    'DONE': 'Выполнено'
}