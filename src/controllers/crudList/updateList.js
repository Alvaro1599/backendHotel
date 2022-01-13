const product = require('../../models/products');
const list = require('../../models/list');
const updateList = async (req, res) => {
	try {
		const { idList, name, productsName } = req.body;
		const findList = await list.findOne({
			where: {
				id: idList
			},
			include: [ product ]
		});
		await findList.update({ name });
		await findList.setProducts([]);

		console.log('second', findList);
		productsName.forEach(async (element) => {
			let find = await product.findByPk(element);
			await findList.addProduct(find);
		});
		res.status(200).json('update list');
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
};

module.exports = updateList;
