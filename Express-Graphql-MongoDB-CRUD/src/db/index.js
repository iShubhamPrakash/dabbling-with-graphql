const mongoose = require("mongoose");

const DB_USER = "test_user";
const DB_PASSWORD = "test_user";
const DB_NAME = "uta";
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.c8li8.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

async function connectToDB() {
	return await mongoose
		.connect(DB_URL, { useNewUrlParser: true })
		.catch((error) => console.log("Error connecting to DB \n", error));
}

module.exports = {
	connectToDB,
};
