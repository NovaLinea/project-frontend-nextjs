

export const UserApi = (instance) => ({
    // No auth user
    
    async fetchDataProfile(userID) {
        return instance.get(`/user/${userID}/get-data-profile`)
    },

    async fetchDataParams(userID) {
        return instance.get(`/user/${userID}/get-params`)
    },

    async fetchFollows(userID) {
        return instance.get(`/user/${userID}/get-follows`)
    },

    async fetchFollowings(userID) {
        return instance.get(`/user/${userID}/get-followings`)
    },

    // Auth user

    async fetchDataSettings(userID) {
        return instance.get(`/auth/user/${userID}/get-settings`)
    },

    async saveData(userID, name, email, description, ntfsNewMsg, ntfsNewSubs, ntfsNewComment, ntfsUpdate, ntfsEmail) {
        return instance.post(`/auth/user/${userID}/save-settings`, {name: name, email: email, description: description, notifications: {new_message: ntfsNewMsg, new_sub: ntfsNewSubs, new_comment: ntfsNewComment, update: ntfsUpdate, email_notification: ntfsEmail}})
    },

    async changePassword(userID, oldPassword, newPassword) {
        return instance.post(`/auth/user/${userID}/change-password`, {old_password: oldPassword, new_password: newPassword})
    },

    async deleteAccount(userID) {
        return instance.get(`/auth/user/${userID}/delete-account`)
    },

    async fetchLikesFavorites(userID) {
        return instance.get(`/auth/user/${userID}/get-likes-favorites`)
    },

    async fetchListFollowings(userID) {
        return instance.get(`/auth/user/${userID}/get-followings`)
    },

    async subscribeUser(userID, accountID) {
        return instance.get(`/auth/user/${userID}/subscribe/${accountID}`)
    },

    async unsubscribeUser(userID, accountID) {
        return instance.get(`/auth/user/${userID}/unsubscribe/${accountID}`)
    },
})