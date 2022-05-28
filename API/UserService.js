import $api from ".";

export default class UserService {
    // No auth user

    static async fetchDataProfile(userID) {
        return $api.get(`/user/${userID}/get-data-profile`)
    }

    static async fetchDataParams(userID) {
        return $api.get(`/user/${userID}/get-params`)
    }

    static async fetchFollows(userID) {
        return $api.get(`/user/${userID}/get-follows`)
    }

    static async fetchFollowings(userID) {
        return $api.get(`/user/${userID}/get-followings`)
    }

    // Auth user

    static async fetchDataSettings(userID) {
        return $api.get(`/auth/user/${userID}/get-settings`)
    }

    static async saveData(userID, name, email, description, ntfsNewMsg, ntfsNewSubs, ntfsNewComment, ntfsUpdate, ntfsEmail) {
        return $api.post(`/auth/user/${userID}/save-settings`, {name: name, email: email, description: description, notifications: {new_message: ntfsNewMsg, new_sub: ntfsNewSubs, new_comment: ntfsNewComment, update: ntfsUpdate, email_notification: ntfsEmail}})
    }

    static async changePassword(userID, oldPassword, newPassword) {
        return $api.post(`/auth/user/${userID}/change-password`, {old_password: oldPassword, new_password: newPassword})
    }

    static async deleteAccount(userID) {
        return $api.get(`/auth/user/${userID}/delete-account`)
    }

    static async fetchLikesFavorites(userID) {
        return $api.get(`/auth/user/${userID}/get-likes-favorites`)
    }

    static async fetchListFollowings(userID) {
        return $api.get(`/auth/user/${userID}/get-followings`)
    }

    static async subscribeUser(userID, accountID) {
        return $api.get(`/auth/user/${userID}/subscribe/${accountID}`)
    }

    static async unsubscribeUser(userID, accountID) {
        return $api.get(`/auth/user/${userID}/unsubscribe/${accountID}`)
    }
}
