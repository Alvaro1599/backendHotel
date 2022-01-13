const e = require('cors');
const category = require('../../models/category');
const createCategory = async (req, res) => {
	try {
		const { name } = req.body;
		const newCategory = await category.create({
			name
		});
		res.status(200).json('create Category');
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};
module.exports = createCategory;
