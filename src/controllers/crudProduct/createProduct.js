const product = require('../../models/products');
const category = require('../../models/category');
const createProducts = async (req, res) => {
	try {
		const { name, note, img, idList } = req.body;

		const findCategory = await category.findByPk(idList);
		if (findCategory) {
			const newProduct = await product.create({
				name,
				note,
				img
			});
			await findCategory.addProduct(newProduct);
			res.status(200).send('product created');
			return;
		}
		res.status(400).json({
			msg: 'Category not found'
		});
		return;
	} catch (error) {
		console.log(error);
		res.status(400).json({
			msg: error
		});
	}
};
module.exports = createProducts;
