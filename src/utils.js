const bcrypt = require("bcrypt");

const password = {
  hash: (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hassPassword) => {
        if (err) reject(err);
        else resolve(hassPassword);
      });
    });
  },
};

module.exports = {
  password,
};
