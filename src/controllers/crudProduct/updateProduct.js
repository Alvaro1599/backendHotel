const products = require('../../models/products');
const updateProducts = async (req, res) => {
	const findProduct = await products.findByPk(req.body.idProduct);
	console.log(findProduct);
	const findName = await products.findOne({
		where: { name: req.body.name }
	});
	if (!findName) {
		await findProduct.update({ name: req.body.name });
		res.status(200).json('update product');
		return;
	}
	res.status(400).json('name alredy exist');
};
module.exports = updateProducts;
