const app = require('./app');
const sequelize = require('./database/index');
app.listen(app.get('PORT'), async () => {
	try {
		console.log(`El servidor esta corriendo en el puerto: ${app.get('PORT')}`);
		await sequelize.authenticate();
		console.log('La conexión a la base de datos se ha realizado correctamente');
		await sequelize.sync({ force: false });
	} catch (error) {
		console.log(error);
	}
});
app.get('PORT');
