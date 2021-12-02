const controller = {
  home: function (req, res) {
    res.send("Welcome to the home page");
  },
  test: function (req, res) {
    res.send({ message: "Soy la test" });
  },
};

module.exports = controller;
