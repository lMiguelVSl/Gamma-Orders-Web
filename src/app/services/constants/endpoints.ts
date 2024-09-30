export const Endpoints = {
    User: {
        getUsers: { method: 'get', path: () => `/clientes` },
        createUser: { method: 'post', path: () => `/clientes` },
        updateUser: { method: 'put', path: () => `/clientes` },
        deleteUser: { method: 'delete', path: () => `/clientes` },
    },
    Authentication: {
        login: { method: 'post', path: () => `/Authentication` },
        checkAuthentication: { method: 'post', path: () => `/Authentication` },
    },
    Restaurant: {
        getRestaurants: { method: 'get', path: () => `/restaurantes` },
    },
    Order: {
        getOrders: { method: 'get', path: () => `/pedidos` },
        createOrder: { method: 'post', path: () => `/pedidos` },
        updateOrder: { method: 'put', path: () => `/pedidos` },
    },
}