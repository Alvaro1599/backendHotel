const client = require('../../models/client');

const updateClient = async (req, res) => {
	try {
		const pk = req.params.id;
		const clientFound = await client.findByPk(pk);
		console.log(pk);
		if (clientFound) {
			await clientFound.update(req.body);
			res.status(200).json('usuario actualizado');
			return;
		}
		res.status(400).json('usuario no encontrado');
		return;
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};
module.exports = updateClient;
