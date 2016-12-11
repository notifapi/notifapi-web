module.exports = {
    cleanUser: function (user) {
        var u = user.toJSON();
        return {
            _id: u._id,
            username: u.username,
            email: u.email,
            firstName: u.firstName,
            lastName: u.lastName,
            enable: u.enable,
            createdAt: u.createdAt,
            updatedAt: u.updatedAt
        }
    }
}