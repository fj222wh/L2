## Names

|       | **Variable name**                                  | **Explaination**                                                     | **Reflection**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | -------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | `createInvoice()`                                  | A method in the Order class to create the invoice.                   | **Intention revealing name**, **Add meaningful context**, **easy to pronunce**, I think this name is pretty short and easy to pronunce as well to understand what it does. It doesn't really give the reader understanding of what type the invoice will be created in, but it gives the reader clear context on what the method's purpose is at least.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **2** | `calculateTotalPrice ()`                           | A method in the Order class to calculate the total price.            | **Intention revealing name, meaningful context, Pronounceable names, avoid, disinformation, searchable name**. This method name gives clear context on what the method does, it sees it to some pretty short, which makes the readability high. It will also be easy to search up this name while coding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **3** | `updateOrderItemQuantity (productId, newQuantity)` | A method in the Order class to update the quantity of an order item. | **Problem domain name, meaningful context, searchable name** this name is from problem domain name because he uses the types of names we would use in the business where this code will be used. It's easy to understand for non-programmers what it does, and how to use it. The name and its parameters are a bit longer, but still gives the reader enough information about what the method and what the parameters mean. The names are a bit longer, but gives more to the reader, so the reader doesn't have to read all the documentation to understand what this method does. It's a bit longer, but it's still pronounceable. The names are also searchable, names are very specific and it would be harder to mix them up with something else. Not trying to be cute only to describe what method and what parameters mean. |
| **4** | `isActiveOrder ()`                                 | A method to check if an order is active. Returns a boolean           | **Intention revealing name, high readability, Pronounceable names** With the name starting with with "is", it shows that the method returns a boolean weather the order is active or not. This name intention, revealing because clearly says what the method is looking for well, still keeping the high readability.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **5** | `ProductCatalog`                                   | Class name for the class handling the product catalog                | **One Word per Concept, Don't be cute, Pronounceable names**. I chose his name because it's straightforward short searchable. with this class name reader understands what this class does, that it contains the product catalog and its methods. I didn't try to be cute or come up with him more fun name, I try to keep it very simple.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Reflection Chapter 2
Before I started to code I had read the chapter 2 and 3 from the book, and when coding I tried to think about the names of the variables.

I agree with most of the rules the book Clean Code talks about, but there is a fine line between giving enough context with just the name, and readability. Sometimes the name which is longer makes it harder to read the code, but gives the reader more context to what the variable is used for.

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
I think the names in this function in the parameters that has been used, gives a clearer context to what the method does, I think by only reading the method name and the parameters you can understand what the method does without reading the code. but her names could have been more concise to improve the readability, but then they would lose the context. In this case, for example I changed the name or order item quantity to only update quantity, it might be able to understand what the method does because of the parameters.

When I wrote a code, I tried to think about giving the variables a good name from the start, but it was sometimes hard. I noticed that had given a variabel a name, but when I came back to the code after a few days, I couldn't understand what the code was doing - then I realized wasn't good enough. 

Changing the names after already the clearing them and using them in both the code and test was a bit of a hustle sometimes. The code broke several times for me when I had changed the name because in the code the methods were still calling and the old name. Sometimes it didn't work to use the function code where you can rename the symbol, so you had to manually look for the variable names, searched the map and manually changed. I'm happy I had my cases easier to find where something went wrong after I changed the name since the test recalling on the old name the test wouldn't pass. I tried to create us for coverage test as possible and therefore my test were pretty good at texting if the code broke because I had changed the name.

I think the most of the rules in this book about the names are logic, for example keeping the names readable by not using way too long variable names, including enough context with names, make the readers confused what the variables mean.

## Functions
|       | **Variable name**                                                       | **Reflection** |
| ----- | ----------------------------------------------------------------------- | -------------- |
| **1** | `createInvoice ()` from the class Invoice                               |                |
| **2** | `addOrderItem(product, quantity)` from the class Order                  |                |
| **3** | `removeOrderItem(productId, quantityToRemove)` from the class Order     |                |
| **4** | `updateOrderItemQuantity (productId, newQuantity)` from the class Order |                |
| **5** | `findProduct (productId)` from the class ProductCatalog                 |                |

## Reflection chapter 3

  

## Reflection Code Quality
I think it's difficult to write high-quality code because I'm not really sure what a standard is. I felt it was hard to know how the object instances should be connected and what's allowed. 

  

Jag tycker att det är svårt att veta hur objekten och klasserna ska vara ihopkopplade

  

## Regler jag följt

Don't be cute

Namnge utifrån vad det är beskrivande

intention reavling names

  
  

Varit lite svårt med avvägning mellan läsbarhet och tydlig namn


  

## ProductCatalog

T.ex. visste jag inte får prodctcatalog även skapa produkter eller kan de läggas till separat? SOC? Eller ska saker höra ihop?

  

// TODO: Add an ID to the product. Fix to be able to add a unique id for each product? Should it be in the Products or should we give the ID here? Check if it's a Product, else return.

// Should the ProductCatalog create the products in the catalog? Not sure!

  

1. Tried to follow the rules when naming variables and functions from the beginning but had to change along the way as well

  
  

![name](/documentation/img/reflection/1.png)

I changed the name to display productCatalog instead to make it more understandable in the store class

  

I changed this to find OrderItem instead of findPRoduct in the orderClass

![name change](/documentation/img/reflection/2.png)

  

Changed to orderItems in Cart instead of products since we created a object for displaying the orderItems in the order class

![ge](/documentation/img/reflection/1.png)

  

I have to change from products..since its more of orderItem rather than products in the order class

![change name](/documentation/img/reflection/4.png)