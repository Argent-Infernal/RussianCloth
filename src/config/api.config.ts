export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
    root: (url = '') => `${url ? url: ''}`,

    auth: (url = '') => API_URL.root(`/auth${url}`),
    users: (url = '') => API_URL.root(`/user${url}`),
    products: (url = '') => API_URL.root(`/products${url}`),
    files: (url = '') => API_URL.root(`/files${url}`),
    orders: (url ='') => API_URL.root(`/orders${url}`),
    statistics: (url ='') => API_URL.root(`/statistics${url}`),
    reviews: (url = '') => API_URL.root(`/reviews${url}`),
    rivewlinks: (url = '') => API_URL.root(`/rivewlinks${url}`)
}