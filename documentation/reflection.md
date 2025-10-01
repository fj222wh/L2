## Names

|       | **Variable name**                                  | **Explaination**                                                     | **Reflection**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | -------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | `createInvoice()`                                  | A method in the Order class to create the invoice.                   | **Intention revealing name**, **Add meaningful context**, **easy to pronunce**, I think this name is pretty short and easy to pronunce as well to understand what it does. It doesn't really give the reader understanding of what format of the invoice, but it gives the reader clear context on what the method's purpose is at least.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **2** | `calculateTotalPrice ()`                           | A method in the Order class to calculate the total price.            | **Intention revealing name, meaningful context, Pronounceable names, avoid, disinformation, searchable name**. This method name gives clear context on what the method does, it sees it to some pretty short, which makes the readability high. It's also easy to search up this name while coding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **3** | `updateOrderItemQuantity (productId, newQuantity)` | A method in the Order class to update the quantity of an order item. | **Problem domain name, meaningful context, searchable name** this name is from problem domain name because he uses the types of names we would use in the business where this code will be used. It's easy to understand for non-programmers what it does, and how to use it. The name and its parameters are a bit longer, but still gives the reader enough information about what the method and what the parameters mean. The names are a bit longer, but gives more to the reader, so the reader doesn't have to read all the documentation to understand what this method does. It's a bit longer, but it's still pronounceable. The names are also searchable, names are very specific and it would be harder to mix them up with something else. Not trying to be cute only to describe what method and what parameters mean. |
| **4** | `isActiveOrder ()`                                 | A method to check if an order is active. Returns a boolean           | **Intention revealing name, high readability, Pronounceable names** With the name starting with with "is", it shows that the method returns a boolean weather the order is active or not. This name intention, revealing because clearly says what the method is looking for well, still keeping the high readability.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **5** |                                                    | Class name for the class handling the product catalog                | **One Word per Concept, Don't be cute, Pronounceable names**. I chose his name because it's straightforward short searchable. with this class name reader understands what this class does, that it contains the product catalog and its methods. I didn't try to be cute or come up with him more fun name, I try to keep it very simple.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Reflection Chapter 2
Before I started to code I had read the chapter 2 and 3 from the book, and when coding I tried to think about the names of the variables. I agree with most of the rules the book Clean Code talks about, but there is a fine line between giving enough context with just the name, and readability. Sometimes the name which is longer makes it harder to read the code, but gives the reader more context to what the variable is used for.

Example:
```javascript
updateOrderItemQuantity (productId, newQuantity) {
	if (!Number.isInteger(newQuantity) || newQuantity < 0) {
		throw new Error('Quantity to remove must be a positive integer')
	}
	
	
	if (newQuantity === 0) {
		const orderItem = this.findOrderItem(productId)
		if (orderItem !== null) {
		this.removeOrderItem(productId, orderItem.quantity)
	}
		return
	}
	
	
	const orderItem = this.findOrderItem(productId)
	if (orderItem !== null) {
		orderItem.quantity = newQuantity
	}
}
```
I think the names in this function in the parameters that has been used, gives a clearer context to what the method does. By only reading the method name and the parameters you can understand what the method does without reading the code. Although the names could have been shorter to improve the readability, but then they would lose some context. In this case, for example I changed the name of updateOrderItemQuantity to only updateQuantity, it might be able to understand what the method anyways since this is a public method in the class Order, but I think the longer names gives a better context.

When I wrote a code, I tried to think about giving the variables a good name from the start, but it was sometimes hard. I noticed that had given a variabel a name, but when I came back to the code after a few days, I couldn't understand what the code was doing - then I realized wasn't good enough. 

Changing the names after already the clearing them and using them in both the code and test was a bit of a hustle sometimes. The code broke several times for me when I had changed the name because in the code the methods were still calling and the old name. Sometimes it didn't work to use the function code where you can rename the symbol, so you had to manually look for the variable names, searched the map and manually changed. I'm happy I had my cases easier to find where something went wrong after I changed the name since the test recalling on the old name the test wouldn't pass. I tried to create us for coverage test as possible and therefore my test were pretty good at texting if the code broke because I had changed the name.

I think the most of the rules in this book about the names are logic, for example keeping the names readable by not using way too long variable names, including enough context with names, make the readers confused what the variables mean.

There are a few times where I changed the name to making moral logic or keep the naming consistent through all of the classes. I really thinking about the large perspective, I only kept the names consistent with its class, but when I wrote a tests and sometimes so that the names that I make sense with all of the classes together, I decided to change the names. for example I changed so it never said display something since it doesn't really displays anything, the return value is just an array and a method itself isn't really displaying anything. That's why it chose to use the word get instead. I think the word display would make more sense if this was on the font or in the UI.

```js
this.#orderItemsInCart = []
```
When I store the information about what products that exist in the cart i store an object which I call orderItem and not an actual instance of the order, therefore I changed several names from `product` to `orderItem` instead when naming variables and methods in the Order class. I thought a name could be a bit misleading since I didn't save an instance of the product. 
  

![name](/documentation/img/reflection/1.png)

I changed the name to display productCatalog instead to make it more understandable in the store class

  

I changed this to find OrderItem instead of findPRoduct in the orderClass

![name change](/documentation/img/reflection/2.png)

  

Changed to orderItems in Cart instead of products since we created a object for displaying the orderItems in the order class

![ge](/documentation/img/reflection/1.png)

  

I have to change from products..since its more of orderItem rather than products in the order class

![change name](/documentation/img/reflection/4.png)

## Functions

|       | **Variable name**                                                       |
| ----- | ----------------------------------------------------------------------- |
| **1** | `createInvoice ()` from the class Order                                 |
| **2** | `addOrderItem(product, quantity)` from the class Order                  |
| **3** | `removeOrderItem(productId, quantityToRemove)` from the class Order     |
| **4** | `updateOrderItemQuantity (productId, newQuantity)` from the class Order |
| **5** | `findProduct (productId)` from the class ProductCatalog                 |

**1. createInvoice()** from the class Order
```javascript
createInvoice (name, email, currency) {
	this.#isActive = false // I refactored and removed this later
	const invoice = new Invoice(this, name, email, currency)
	return invoice.createInvoice()
}
```
This was my code at first, but according to Clean Code a function should **only handle a single thing**. I thought it would be logic for the order to be set to the status `inactive` once the invoice is being generated, but based on the name of the functions it does not indicate that the status will be changed. If I had changed the method name to `inactivateAndCreateInvoice()` it might have been more ok, but following the book a functions should only handle one action.
```javascript
setOrderStatus (boolean) {
	this.#isActive = boolean
}
```
After refactoring my code I created a separate setter for handling the inactivation/activation of an order. The developer who uses this module in their application can now choose when they want to inactivate the order since there's no coupling between createInvoice() and the status of the order now. Now it follows the rule **the function does only one thing** and that there are **no side effects**.

I followed the rule that **the function has to be short**. In the book they wanted the function to be 3-4 lines and this one is 2 lines now. 

I broke against the rules for parameters. Unfortunately I had to use way more parameters than the book recommend. The book says it's best to have none or only one parameter, but in this case since I have to send information to the constructor I had to use more parameters.

In my current design, I don't have the Customer's information saved as attributes in the Order class and therefore I chose to design it like this - I understand it may not be of best praxis, but I chose to do it like this since I didn't have time to refactor and create e.g a Customer class which probably should be connected to the Order. If I refactored the code like this I wouldn't have to have the parameters for name and email since it would have been attributes in the Customer class.

I follow the rule of**1-2 level indentation**, I haven't nested the code within if-statements or loops.

**2.`addOrderItem(product, quantity)`** from the class Order
This function follows the rule of **only doing one thing**, It is not as short as 3-4 lines but I tried to keep it as short as possible. I followed the rules where the code **has to be 1-2 level maximum**, I only used one level of nesting with the if-statements. 
```javascript
addOrderItem (product, quantity = 1) {
	if (!(product instanceof Product)) {
		throw TypeError(
		'The order item has to be an instance of the class Product'
		)
	}
	
	if (!this.findOrderItem(product.getID())) {
		const orderItem = {
			product,
			productId: product.getID(),
			quantity
		}
	
		this.#orderItemsInCart.push(orderItem)
	} else {
		const productInCart = this.findOrderItem(product.getID())
		productInCart.quantity += quantity
	}
}
```
Before refactoring I kept the code which generates the orderItem in the addOrderItem method, but since it took a few lines of code I decided to make it a private method for creating the OrderItem. I'm not sure If i should have created its own class instead or if it's ok to have an object like this representing the orderItems in the cart.
```js
addOrderItem (product, quantity = 1) {
	
	if (!(product instanceof Product)) {
		throw TypeError('The order item has to be an instance of the class Product')
	}
	
	const productInCart = this.findOrderItem(product.getID())
	if (productInCart) {
		productInCart.quantity += quantity
	} else {
		const orderItem = this.#createOrderItem(product, quantity)
		this.#orderItemsInCart.push(orderItem)
	}
}

#createOrderItem (product, quantity) {
	const orderItem = {
		product,
		productId: product.getID(),
		quantity
	}
return orderItem
}
```

It follows the rules with **dyadic arguments**, I thought I needed both of these arguments in this method to be able to update the quantity. At least in the way I designed the module and how I save the orderItems. If I would have designed it differently maybe there would have been a smarter solution for it.

**3. `removeOrderItem(productId, quantityToRemove)`** from the class Order
I tried to follow the rule of **DRY**, therefore I created a separate method to find the index of a product, and find the product in the array. I tried to not have as many arguments.
```js
removeOrderItem (productId, quantityToRemove) {
	if (quantityToRemove <= 0 || !Number.isInteger(quantityToRemove)) {
		throw new Error('Quantity to remove must be a positive integer')
	}
	
	const product = this.findOrderItem(productId)
	if (!product) {
			throw new Error('Failed to find order item')
	}

	const quantityInCart = product.quantity
	if (quantityInCart - quantityToRemove <= 0) {
		const index = this.findIndex(productId)
		this.#orderItemsInCart.splice(index, 1)
	} else {
		const newQuantity = product.quantity - quantityToRemove
		this.updateOrderItemQuantity(productId, newQuantity)
	}
}
```
I refactored the code:
```js
removeOrderItem (productId) {
	const index = this.findIndex(productId)
	if (index) {
		this.#orderItemsInCart.splice(index, 1)
	}
}
```
The updateOrderItemQuantity and this seemed similar, I changed the design so removeOrderItem removes the orderItem completely like the name implies, and updateOrderItemQuantity can handle the changes of the quantity, regardless of it's increasing or decreasing the quantity and removeOrderItem will remove it completely. I chose to refactor my design to make it more logical and to follow the rules from the book more by removing unnecessary parameters and to make the code shorter.

**4. `updateOrderItemQuantity (productId, newQuantity)`** from the class Order
```js
updateOrderItemQuantity (productId, newQuantity) {
	if (!Number.isInteger(newQuantity) || newQuantity < 0) {
		throw new Error('New quantity must be a positive integer')
	}
	
	if (newQuantity <= 0) {
		this.removeOrderItem(productId)
		return
	}
	
	const orderItem = this.findOrderItem(productId)
	if (orderItem) {
		orderItem.quantity = newQuantity
	} else {
		throw new Error('Failed to update the quantity')
	}
}
```
I am not sure if this counts as if the code does two things, because they are connected, if someone wants to update the quantity to 0, it has to remove the orderItem? Does this count as an side effect? Perhaps I could've changed the code to ONLY update, and not remove. Maybe throw an error if the quantity is set to 0 to let the developer handle the error in their application? I refactored this code so it only has **1-2 level indentation**, and I tried to keep the function short. The if-statements take up a few rows but I'm not sure how I should refactor it? Do every if-statement need to be in their own function? I thought it made more sense if everything was in the same function because it is not a lot of code. I tried to save `orderItem` in a constant, so I wouldn't have to call on the findOrderItem()-function two times, which I did initially. Once to check if it exists, and one time for setting the value of the attribute quantity. **Use exceptions instead of error codes**, I have tried to use exceptions when something goes wrong instead of error codes. **Command Query Separation** I tried to make sure it does one thing, and not both changes the state of an objekt and returns something. 

**5. `findIndex (productId)`** from the class Order
```js
findIndex (productId) {
	const index = this.#orderItemsInCart.findIndex((orderItem) => {
		return orderItem.productId === productId
	})
	
	if (index !== -1) {
		return index
	} else {
		throw new Error('Failed to find index for the orderItem')
	}
}
```
**1-2 level indentation**, I kept the code short, and on only within one if-statement. I didn't nestle the code. **Do One Thing**, this function does one thing, it looks up the index of an orderItem and returns it. **Use exceptions**, I throw exceptions when an index cannot be found instead of an error code or any other type of data. **No side effects**, this code doesn't have any side effects, **Common Monadic Form**, only one argument is used which makes it easy to understand and use the code.

## Reflection chapter 3
I don't agree with everything they say in this book because I feel like they wanted to divide functions into too small subfunctions which in my opinion makes the code a bit because if you don't understand what you scroll a lot documents to read. I agree on that functions should be pretty short, but only 3-4 lines, it's very little and if I would refactor the code into many shorter functions I feel like it would have been messy, because it would be a lot of functions calling on each other, but if they functions only does one thing, or returns only a single thing it's very easy to test. I see the benefits of having low coupling, it's easier to maintain and test single parts of the system - but too small functions feels messy sometimes. 

I broke the no side affects and that the code should only do one thing, but I tried to refactor my code to make sure the code doesn't have side affects and that it only does one thing. I understand the benefits of few parameters although on some places I had already made a bad design, and I didn't know how to refactor it in a way during the given time. But in the future, I will have to refactor it a bit more to remove some of the parameters to make the code easier to use and understand.

I agree on most things from the book except the length of the functions. Most things are logic that the code shouldn't be nested in too many loops or if-statements etc, I tried to keep my code on a 1-2 level indentation but sometimes it feels like the way the book is a bit extreme.

## Reflection Code Quality
When I was creating this project, one thing that I struggled with was knowing how to connect object sometimes because I didn't know what is the correct way. I didn't know if you should make each class independent of each other when coding, or if it would be okay if instances of the one object cannot without the parent. I thought it was a bit hard to design the classes and I tried to write it in a way that would make sense, but I'm not sure if it was correct.

I've been trying to fall of the rules from chapter 2 and three as much as possible though, I don't always agree. Sometimes I couldn't follow the rules for the functions of chapter 3, because sometimes I thought it was difficult to divide the functions way too much and the document became cluttered - while I was coding I had to scroll up and down way too many times. I understand the point where you only have to understand the function name without actually seeing the entire code. I think the idea is good for comprehending what the code is supposed to do only from reading the name, and it would be easier to write test driven code as well if the functions are small. However it was difficult to keep the functions as short as 3-4 lines but I tried to keep them shorter and not nested. 

Based on the book, they said they didn't want you to use more than one or two parameters but sometimes I used way more parameters because they had to send in information to function. For example when creating the invoice, I used a lot of parameters because they didn't have those attributes saved in the order item. Maybe if I had changed the design to include the customers name and information in Order class it would been easier, but since I hadn't a Customer class I chose to keep the coupling as low as possible.

Overall I tried to keep the code as clean as possible, both when it comes to the naming of variables/classes/methods and writing the code blocks with only 1-2 levels and when it was possible I tried to use as few parameters as possible. Keeping the methods short is difficult, but I tried to follow that rule as well.



