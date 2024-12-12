export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URL = {
    root: (url = '') => `${url ? url: ''}`,

    home: () => PUBLIC_URL.root('/'),
    auth: () => PUBLIC_URL.root('/auth'),
    cart: () => PUBLIC_URL.root('/cart'),
    order: () => PUBLIC_URL.root('/order') 
}

export const DASHBOARD_URL = {
    root: (url = '') => `${url ? url: ''}`,

    home: () => DASHBOARD_URL.root('/dashboard'),
    cart: () => DASHBOARD_URL.root('/dashboard/cart'),
    order: () => DASHBOARD_URL.root('/dashboard/order'),
    orders: () => DASHBOARD_URL.root('/dashboard/orders')
}

export const ADMIN_URL = {
    root: (url = '') => `${url ? url: ''}`,

    home: () => ADMIN_URL.root('/admin'),
    users: () => ADMIN_URL.root('/admin/users'),
    orders: () => ADMIN_URL.root('/admin/orders'),
    products: () => ADMIN_URL.root('/admin/products'),
    reviews: () => ADMIN_URL.root('/admin/reviews'),
}