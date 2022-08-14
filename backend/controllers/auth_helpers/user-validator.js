const {getExistingUser} = require("./db-communicator");
const bcrypt = require('bcryptjs');

function hashPassword(password){
    return bcrypt.hash(password, 12);
}

function checkIfExistingUserHasDefaultLogIn(user){
    return user.hasDefaultLogin;
}

function checkIfPasswordCorrect(passwordEntered, passwordInDatabase){
    return bcrypt.compare(passwordEntered, passwordInDatabase);
}

function validateSignUp(user, res){
    const userDoesExist = user && checkIfExistingUserHasDefaultLogIn(user);
    if(userDoesExist){
        res.status(400).json({message: "User already exists"});
        return false;
    }
    return true;
}

async function validateResetPasswordRequest(email){
    const existingUser = await getExistingUser(email);
    if (!existingUser)
        return false;
    return true;
}

module.exports = {
  hashPassword,
  getExistingUser,
  validateSignUp,
  checkIfPasswordCorrect,
  validateResetPasswordRequest
};