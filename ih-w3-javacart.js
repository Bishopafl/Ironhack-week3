var ShopCart = function(item) {
	this.item = []
}

ShopCart.prototype.add_item = function(fruit){
	this.item.push(fruit);
}

ShopCart.prototype.checkOut = function(){
	var total = 0;
	this.item.forEach(function(item){
		total = total + item.price;
	})

	if {
		this.item.length > 5;
		total = total
	}

	return total;
}

var Groceries = function(name, price) {
	this.name = name;
	this.price = price;
}


var apple = new Groceries("Apple", "$10");
var orange = new Groceries("Orange", "$5");
var grapes = new Groceries("Grapes", "$15");
var banana = new Groceries("Banana", "$20");
var watermelon = new Groceries("Watermelon", "50");
var adamsCart = new ShopCart()
adamsCart.add_item(apple);
adamsCart.add_item(orange);
adamsCart.add_item(grapes);
adamsCart.add_item(banana);
adamsCart.add_item(watermelon);
// var item_array = [apple, orange, grapes, banana, watermelon];

// console.log(add_item.item_array)
var total = adamsCart.checkOut();
console.log("Your total today is " + total);