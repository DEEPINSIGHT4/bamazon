var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"",
	database:"bamazon"
});
connection.connect(function(err){
	if(err){
		console.error("error connectiog: "+ err.stack)
	}
	connection.query("SELECT * FROM products",function(err,res){
		if(err) throw err;
		console.log("itemID\tProduct Name\tdepartment name\tprice\titems in stock");
		 console.log("**************************")

		 for(var i =0; i<res.length; i++){
		 	console.log(res[i].item_id +"\t"+res[i].product_name+"\t"+res[i].department_name+"\t"+res[i].price+"\t"+res[i].stock_quantity);
		 	 console.log("******************************");

		 	 inquirer.prompt([{
		 	 	type:"input",
		 	 	name:"choice",
		 	 	message:"what would you like to purchase?[type Q to quit]"
		 	 }]).then(function(val){
		 	 	for(var i = 0; i<res.length; i++){
		 	 		if(res[i].product_name === val.choice){
		 	 			var product = val.choice;
		 	 			var id = i;
		 	 		}
		 	 	}
		 	 })
		 }

	})

});