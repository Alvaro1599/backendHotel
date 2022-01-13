const app = require('./app');
const sequelize = require('./database/index');
const category = require('./models/category');
const product = require('./models/products');
const list = require('./models/list');
const product_list = require('./models/product_list');
app.listen(app.get('PORT'), async () => {
	try {
		console.log(`El servidor esta corriendo en el puerto: ${app.get('PORT')}`);
		await sequelize.authenticate();
		list.belongsToMany(product, { through: product_list });
		product.belongsToMany(list, { through: product_list });
		category.hasMany(product);
		console.log('La conexión a la base de datos se ha realizado correctamente');
		await sequelize.sync({ force: false });
	} catch (error) {
		console.log(error);
	}
});
app.get('PORT');
