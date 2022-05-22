const getUsers = async (req, res, next) => {
  try {
    res.json(["123", "213"]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getUsers;
