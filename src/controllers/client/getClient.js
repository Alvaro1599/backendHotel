const client = require('../../models/client');

const getClient = async (req, res) => {
	try {
		const data = await client.findAll({});
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};
module.exports = getClient;
