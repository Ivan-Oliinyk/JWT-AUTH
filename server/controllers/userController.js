const userService = require("../service/userService");

class UserController {
  async registrationUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registestration(email, password);

      //что бы куки тут работали нужно в корне подключить (app.use(cookieParser());)
      res.cookie("refreshToken", userData.refreshTRoken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, //нужно указывать милисекундах
        httpOnly: true, //указываем что бы эту куку нельзя было получать и изменять внутри браузера (если использовать hhttps нужно добавить флаг секюр)
      });

      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async loginUser(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async logoutUser(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async activate(req, res, next) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json({ name: "Alan", age: 31 });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
