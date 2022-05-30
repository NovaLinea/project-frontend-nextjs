

export const UserApi = (instance) => ({
    // No auth user
    
    async getData(userID) {
        return instance.get(`/user/${userID}/get-data`)
    },

    async getParams(userID) {
        return instance.get(`/user/${userID}/get-params`)
    },

    async getFollows(userID) {
        return instance.get(`/user/${userID}/get-follows`)
    },

    async getFollowings(userID) {
        return instance.get(`/user/${userID}/get-followings`)
    },

    // Auth user

    async getSettings(userID) {
        return instance.get(`/auth/user/${userID}/get-settings`)
    },

    async save(userID, name, email, description, ntfsNewMsg, ntfsNewSubs, ntfsNewComment, ntfsUpdate, ntfsEmail) {
        return instance.post(`/auth/user/${userID}/save`, {name: name, email: email, description: description, notifications: {new_message: ntfsNewMsg, new_sub: ntfsNewSubs, new_comment: ntfsNewComment, update: ntfsUpdate, email_notification: ntfsEmail}})
    },

    async changePassword(userID, oldPassword, newPassword) {
        return instance.post(`/auth/user/${userID}/change-password`, {old_password: oldPassword, new_password: newPassword})
    },

    async delete(userID) {
        return instance.get(`/auth/user/${userID}/delete`)
    },

    async getLikesFavorites(userID) {
        return instance.get(`/auth/user/${userID}/get-likes-favorites`)
    },

    async getListFollowings(userID) {
        return instance.get(`/auth/user/${userID}/get-followings`)
    },

    async subscribe(userID, accountID) {
        return instance.get(`/auth/user/${userID}/subscribe/${accountID}`)
    },

    async unsubscribe(userID, accountID) {
        return instance.get(`/auth/user/${userID}/unsubscribe/${accountID}`)
    },
})