const User = require('../../models/user-model');

function getExistingUser(email){
    return User.findOne({email});
}

function insertGoogleAuthenticatedUserToDB(user, res){
    User.findOneAndUpdate({
        email: user.email
    },
    {
        name: user.name,
        picture: user.picture,
        isGoogleAuthenticated: true,
    }, {new: true, upsert: true, useFindAndModify: false})
    .setOptions({ sanitizeFilter: true })
    .then (user => res.status(200).json({email: user.email, name: user.name, picture: user.picture, id: user._id}))
    .catch (error => res.status(500).json({error: error.message}));
}

function insertNewDefaultUserToDB(userInfo, isGoogleAuthenticated, res){
    User.findOneAndUpdate({
        email: userInfo.email
    },
    {
        name: userInfo.name,
        password: userInfo.password,
        isGoogleAuthenticated: isGoogleAuthenticated,
        hasDefaultLogin: true
    }, {new: true, upsert: true, useFindAndModify: false})
    .setOptions({ sanitizeFilter: true })
    .then(user => res.status(200).json({email: user.email, name: user.name, picture: user.picture, id: user._id}))
    .catch (error => console.log(error.message));
}

function updatePassword(user, res){
    User.findOneAndUpdate({
        email: user.email
    },
    {
        password: user.password
    }, {new: true, upsert: true, useFindAndModify: false})
    .setOptions({ sanitizeFilter: true })
    .then (user => res.status(200).json({email: user.email, name: user.name, picture: user.picture, id: user._id}))
    .catch (error => res.status(500).json({error: error.message}));
}

module.exports = {
    insertGoogleAuthenticatedUserToDB,
    insertNewDefaultUserToDB,
    updatePassword,
    getExistingUser
}