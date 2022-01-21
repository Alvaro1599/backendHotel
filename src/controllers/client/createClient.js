const client = require('../../models/client');

const createClient = async (req, res) => {
	try {
		const { name, dni, correo, celular } = req.body;
		const data = await client.create({ name, dni, correo, celular });
		res.status(200).json('usuario creado');
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};
module.exports = createClient;
