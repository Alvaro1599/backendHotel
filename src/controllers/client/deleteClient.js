const client = require('../../models/client');
const deleteClient = async (req, res) => {
	try {
		const pk = req.body.id;
		const clientFound = await client.findByPk(pk);
		if (clientFound) {
			await clientFound.destroy();
			res.status(200).json('usuario eliminado');
			return;
		}
		res.status(400).json('usuario no encontrado');
		return;
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};
module.exports = deleteClient;
