const {
  insertGoogleAuthenticatedUserToDB,
  insertNewDefaultUserToDB,
  updatePassword,
} = require("./auth_helpers/db-communicator");

const {
  getExistingUser,
  checkIfPasswordCorrect,
  hashPassword,
  validateSignUp,
  validateResetPasswordRequest,
} = require("./auth_helpers/user-validator");

const sanitizeHTML = require('sanitize-html');




async function googleLogIn(req, res) {
  user = sanitizeHTML(req.body);
  await insertGoogleAuthenticatedUserToDB(user, res);
}



async function signUp(req, res) {
  const userInfo = req.body;
  userInfo.name = sanitizeHTML(userInfo.name);
  
  const existingUser = await getExistingUser(userInfo.email);
  if (!validateSignUp(existingUser, res)) return;

  userInfo.password = await hashPassword(userInfo.password);
  const isGoogleAuthenticated = existingUser ? true : false;

  await insertNewDefaultUserToDB(userInfo, isGoogleAuthenticated, res);
}



async function signIn(req, res) {
  const { email, password } = req.body;
  const existingUser = await getExistingUser(email);
  if (!existingUser)
    return res.status(404).json({ message: "User doesn't exist" });

  if (!(await checkIfPasswordCorrect(password, existingUser.password)))
    return res.status(400).json({ message: "Invalid password" });

  res.status(200).json({
      email: existingUser.email,
      name: existingUser.name,
      picture: existingUser.picture,
      id: existingUser._id,
    });
}



async function resetPasswordRequest(req, res) {
    const email = req.body.email;
    if(validateResetPasswordRequest(email))
        return res.status(200).json({ email });
    res.status(404).json({ message: "User doesn't exist" });
}



async function resetPassword(req, res) {
  const user = req.body;
  user.password = await hashPassword(user.password);
  await updatePassword(user, res);
}

module.exports = {
  googleLogIn,
  signIn,
  signUp,
  resetPassword,
  resetPasswordRequest,
};