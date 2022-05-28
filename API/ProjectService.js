import $api from ".";

export default class ProjectService {
    // No auth user

    static async fetchProjectsPopular() {
        return $api.get('/project/userID/get-projects-popular')
    }

    static async getDataProject(projectID) {
        return $api.get(`/project/${projectID}/get-data-project`)
    }

    // Auth user

    static async createProject(userID, nameProject, descriptionProject, typeProject, priceProject, paymentSystem, listStaff) {
        if (typeProject === 'sale') {
            return $api.post(`/auth/project/${userID}/create`, {name: nameProject, description: descriptionProject, price: Number(priceProject), type: typeProject, time: new Date().toISOString()})
        }
        else if (typeProject === 'donates') {
            return $api.post(`/auth/project/${userID}/create`, {name: nameProject, description: descriptionProject, price: Number(priceProject), payment_system: paymentSystem, type: typeProject, time: new Date().toISOString()})
        }
        else {
            return $api.post(`/auth/project/${userID}/create`, {name: nameProject, description: descriptionProject, staff: listStaff, type: typeProject, time: new Date().toISOString()})
        }
    }

    static async fetchProjectsUser(userID) {
        return $api.get(`/auth/project/${userID}/get-projects-user`)
    }

    static async fetchProjectsHome(userID) {
        return $api.get(`/auth/project/${userID}/get-projects-home`)
    }

    static async fetchFavoritesProjects(userID) {
        return $api.get(`/auth/project/${userID}/get-projects-favorites`)
    }

    static async likeProject(projectID, userID) {
        return $api.get(`/auth/project/${projectID}/like/${userID}`)
    }

    static async dislikeProject(projectID, userID) {
        return $api.get(`/auth/project/${projectID}/dislike/${userID}`)
    }

    static async favoriteProject(projectID, userID) {
        return $api.get(`/auth/project/${projectID}/favorite/${userID}`)
    }

    static async removeFavoriteProject(projectID, userID) {
        return $api.get(`/auth/project/${projectID}/remove-favorite/${userID}`)
    }

    static async deleteProject(projectID) {
        return $api.get(`/auth/project/${projectID}/delete-project`)
    }

    static async saveChangesProject(userID, nameProject, descriptionProject, typeProject, priceProject, paymentSystem, listStaff) {
        if (typeProject === 'sale') {
            return $api.post(`/auth/project/${userID}/save-changes`, {name: nameProject, description: descriptionProject, price: Number(priceProject), editing_time: new Date().toISOString()})
        }
        else if (typeProject === 'donates') {
            return $api.post(`/auth/project/${userID}/save-changes`, {name: nameProject, description: descriptionProject, price: Number(priceProject), payment_system: paymentSystem, editing_time: new Date().toISOString()})
        }
        else {
            return $api.post(`/auth/project/${userID}/save-changes`, {name: nameProject, description: descriptionProject, staff: listStaff, editing_time: new Date().toISOString()})
        }
    }
}
