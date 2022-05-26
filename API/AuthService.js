import $api from ".";

export default class AuthService {
    static async register(data) {
        return $api.post('/auth/register', data)
    }
    
    static async login(data) {
        return $api.post('/auth/login', data)
    }

    static async logout() {
        return $api.get('/auth/logout')
    }
}
