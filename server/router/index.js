const Router = require("express").Router;
const {
  getUsers,
  registrationUser,
  loginUser,
  activate,
  logoutUser,
  refresh,
} = require("../controllers/userController");

const {
  ROUTERS: { REGISTRATION, LOGIN, LOGOUT, REFRESH, USERS, ACTIVATE },
} = require("../config");

const router = new Router();

router.post(REGISTRATION, registrationUser);
router.post(LOGIN, loginUser);
router.post(LOGOUT, logoutUser);
router.get(REFRESH + "/:link", refresh);
router.get(ACTIVATE, activate);
router.get(USERS, getUsers);

module.exports = router;
