const { default: axios } = require("axios");
const mongoose = require("mongoose");
const { User, Company } = require("../db/models");

const resolvers = {
	Query: {
		test: () => `Hello world!!`,
		allUsers: async () => await User.find({}),
		allCompanies: async () => await Company.find({}),
		getAllCovidData: async () => {
			const result = await axios.get(
				`https://corona.lmao.ninja/v2/continents?yesterday=true&sort`
			);
			return result.data;
		},
		getCovidDataOfCountry: async (root, { country }) => {
			const result = await axios.get(
				`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`
			);
			return result.data;
		},
	},

	Mutation: {
		addUser: async (root, args) => {
			const { user } = args;
			const newUser = new User({
				_id: new mongoose.Types.ObjectId(),
				...user,
			});

			return await newUser.save();
		},

		updateUser: async (root, args) => {
			let { id, user } = args;
			return User.findByIdAndUpdate(id, { ...user }, { new: true });
		},

		deleteUser: async (root, { id }) => {
			return await User.findByIdAndDelete(id);
		},

		addCompany: async (root, args) => {
			const { company } = args;
			const newCompany = new Company({
				_id: new mongoose.Types.ObjectId(),
				...company,
			});

			return await newCompany.save();
		},

		updateCompany: async (root, args) => {
			let { id, company } = args;
			return Company.findByIdAndUpdate(id, { ...company }, { new: true });
		},

		deleteCompany: async (root, { id }) => {
			return await Company.findByIdAndDelete(id);
		},
	},
};

module.exports = resolvers;
