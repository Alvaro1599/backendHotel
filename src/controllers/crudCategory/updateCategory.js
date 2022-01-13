const category = require('../../models/category');
const updateCategory = async (req, res) => {
	const { name } = req.body;
	const findCategory = await category.findByPk(req.body.id);
	await findCategory.update({ name });
	res.status(200).json('update category');
};
module.exports = updateCategory;
