const mongoose = require("mongoose");
const { userSchema, companySchema } = require("../schema");

const User = mongoose.model("User", userSchema);
const Company = mongoose.model("Company", companySchema);

module.exports = {
  User,
  Company
}