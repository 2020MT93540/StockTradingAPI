var express = require('express'), app = express(), port = process.env.port || 3000;

app.listen(port);

console.log("server started on " + port);

yahooStockPrices = require('./yahoo-stock-prices');

async function getStocks() {
	const data = await yahooStockPrices.getCurrentData('INFY');
	console.log(data); // { currency: 'USD', price: 132.05 }
}

app.get("/url", (req, res, next) => {
	res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/getCurrentPrice", (req, res, next) => {
	getStocks();
});

