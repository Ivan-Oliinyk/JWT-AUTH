const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mailService");
const TokeService = require("./tokenService");
const UserDto = require("../dto/userDto");

const {
  API_URL,
  ROUTERS: { API, ACTIVATE },
} = require("../config");

class UserService {
  async registestration(email, password) {
    // Проверяем если с таким емейлом пользователь
    const candidate = await UserModel.findOne({ email });

    // если есть прокидываем ошибку
    if (candidate) {
      throw new Error(`User with email ${email} is already exist !`);
    }

    //хешируем пароль
    const hashPassword = await bcrypt.hash(password, 3);

    //создаем ссылку для активации
    const activationLink = uuid.v4();

    //cоздаем пользователя в базе данных
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });

    // отправляем ссылку на почту
    await mailService.sendActivationMail(
      email,
      `${API_URL}/${API}/${ACTIVATE}/${activationLink}`
    );

    //генерируем рефреш токены
    const userDto = new UserDto(user);
    const tokens = TokeService.generateTokens({ ...userDto });
    await TokeService.saveToken(userDto.id, tokens.refreshToken);

    // возвращаем информацию о пользователе и токены
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
