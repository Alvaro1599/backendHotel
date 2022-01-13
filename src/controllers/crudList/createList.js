const List = require('../../models/list.js');
const product = require('../../models/products');
const createList = async (req, res) => {
	try {
		const { name, idProducts } = req.body;
		const newList = await List.create({
			name
		});
		idProducts.forEach(async (id) => {
			const findProduct = await product.findByPk(id);
			await newList.addProduct(findProduct);
		});
		res.status(200).json('create List');
	} catch (error) {
		console.log(error);
		res.status(400).json({ msg: error });
	}
};

module.exports = createList;
