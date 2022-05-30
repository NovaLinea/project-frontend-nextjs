

export const AuthApi = (instance) => ({
    async register(data) {
        return instance.post('/auth/register', data);
    },
    
    async login(data) {
        return instance.post('/auth/login', data);
    },

    async getMe() {
        return instance.get('/auth/get-me');
    },
})