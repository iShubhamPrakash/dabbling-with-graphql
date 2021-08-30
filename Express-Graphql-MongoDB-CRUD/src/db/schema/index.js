const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	name: String,
	email: String,
	phone: String,
	dob: String,
	company: String,
});

const companySchema = new Schema({
	name: String,
	website: String,
	address: String,
	employeesCount: Number,
});

module.exports = {
  userSchema,
  companySchema
}
