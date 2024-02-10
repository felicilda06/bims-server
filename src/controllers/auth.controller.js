const db = require("../connection");
const { password } = require("../utils");

class AuthController {
  getUserByEmail = (email) => {
    const query = `Select * from tbl_accounts where email = "${email}"`;
    const result = db.query(query);
  };
  newUser = async (ctx) => {
    const user = ctx.request.body;
    const hassPassword = await password.hash(user.password);
    const query = `Insert into tbl_accounts VALUES ('', '${user.fullname}', '${user.barangay}', '${user.email}', '${hassPassword}', 1)`;
    await db.query(query);
    ctx.response.status = 201;
    ctx.body = {
      message: "User Createed Successfully",
    };
  };
}

module.exports = AuthController;
