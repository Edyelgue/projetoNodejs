const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//==========Config==========
	//==========Template Engine==========
	app.engine('handlebars', handlebars.engine());
	app.set('view engine', 'handlebars');

	//==========Conexão com o banco de dados MySQL==========
	const sequelize = new Sequelize('logisticaBD', 'root', '', {
	host: "localhost",
	dialect: 'mysql'
});

//==========Rotas==========
app.get('/cad', (req, res) => {
	res.render(__dirname + '/views/layouts/formulario.handlebars');
});

app.get('/add', (req, res) => {
	res.send('Dados enviados com sucesso!')
});

//==========SERVIDOR==========
app.listen(8081, () => {
	console.log("Servidor rodando na url http://localhost:8081")
});