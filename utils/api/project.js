

export const ProjectApi = (instance) => ({
    // No auth user

    async getPopular() {
        return instance.get('/project/null/get-popular')
    },

    async getData(projectID) {
        return instance.get(`/project/${projectID}/get-data`)
    },

    // Auth user

    async create(userID, nameProject, descriptionProject, typeProject, priceProject, paymentSystem, listStaff) {
        if (typeProject === 'sale') {
            return instance.post(`/auth/project/${userID}/create`, {name: nameProject, description: descriptionProject, price: Number(priceProject), type: typeProject, time: new Date().toISOString()})
        }
        else if (typeProject === 'donates') {
            return instance.post(`/auth/project/${userID}/create`, {name: nameProject, description: descriptionProject, price: Number(priceProject), payment_system: paymentSystem, type: typeProject, time: new Date().toISOString()})
        }
        else {
            return instance.post(`/auth/project/${userID}/create`, {name: nameProject, description: descriptionProject, staff: listStaff, type: typeProject, time: new Date().toISOString()})
        }
    },

    async getProjectsUser(userID) {
        return instance.get(`/auth/project/${userID}/get-projects-user`)
    },

    async getHome(userID) {
        return instance.get(`/auth/project/${userID}/get-home`)
    },

    async fetchFavorites(userID) {
        return instance.get(`/auth/project/${userID}/get-favorites`)
    },

    async like(projectID, userID) {
        return instance.get(`/auth/project/${projectID}/like/${userID}`)
    },

    async dislike(projectID, userID) {
        return instance.get(`/auth/project/${projectID}/dislike/${userID}`)
    },

    async favorite(projectID, userID) {
        return instance.get(`/auth/project/${projectID}/favorite/${userID}`)
    },

    async removeFavorite(projectID, userID) {
        return instance.get(`/auth/project/${projectID}/remove-favorite/${userID}`)
    },

    async delete(projectID) {
        return instance.get(`/auth/project/${projectID}/delete`)
    },

    async save(userID, nameProject, descriptionProject, typeProject, priceProject, paymentSystem, listStaff) {
        if (typeProject === 'sale') {
            return instance.post(`/auth/project/${userID}/save`, {name: nameProject, description: descriptionProject, price: Number(priceProject), editing_time: new Date().toISOString()})
        }
        else if (typeProject === 'donates') {
            return instance.post(`/auth/project/${userID}/save`, {name: nameProject, description: descriptionProject, price: Number(priceProject), payment_system: paymentSystem, editing_time: new Date().toISOString()})
        }
        else {
            return instance.post(`/auth/project/${userID}/save`, {name: nameProject, description: descriptionProject, staff: listStaff, editing_time: new Date().toISOString()})
        }
    },
})