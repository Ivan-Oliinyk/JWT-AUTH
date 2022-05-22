const { Schema, model } = require("mongoose");

const TokenSchema = {
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, require: true },
};

module.exports = model("Token", TokenSchema);
