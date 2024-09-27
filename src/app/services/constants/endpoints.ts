export const Endpoints = {
    User: {
        getUsers: { method: 'get', path: () => `/Users` },
        createUser: { method: 'post', path: () => `/Users` },
        updateUser: { method: 'put', path: () => `/Users` },
        deleteUser: { method: 'delete', path: () => `/Users` },
    },
    Authentication: {
        login: { method: 'post', path: () => `/Authentication` },
        checkAuthentication: { method: 'post', path: () => `/Authentication` },
    }
}