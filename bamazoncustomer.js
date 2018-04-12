var inquirer = require('inquirer')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"

})


inquirer.prompt([
    {
        type: "input",
        name: 'item_id',
        message: "Please enter item id to purchase"
    },
    {
        type: "input",
        name: "stock_quantity",
        message: "Please enter quantity of purchase"


    }



]).then(function (input) {
    var quantity = input.stock_quantity
    var item = input.item_id
    var querystring = "Select * from products where ?"
    connection.query(querystring, {
        item_id: item
    }, function (error, data) {
        if (error) {
            throw error
        }
        var productData = data[0]
        if (quantity <= productData.stock_quantity) {
            console.log("You are trying to ordered this item" + productData.product_name )
            console.log("We have it in stock")
            var updatequerystring = "update products set stock_quantity = " + (productData.stock_quantity - quantity) +
                " where item_id = " + item
            connection.query(updatequerystring, function (error, data) {
                if (error) throw error;
                console.log('Your order has been placed' + productData.price * quantity);
                console.log('Thank you for shopping with us!');
                console.log()
                connection.end();
            }

            )
        }
    })
})