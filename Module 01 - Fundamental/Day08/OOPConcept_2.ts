
/*

Exercise 2

● Create a program to create transaction
● Product Class
	○ Properties
		■ Name
		■ Price
● Transaction Class
	○ Properties
		■ Total
		■ Product
			● All product data
			● Qty

○ Add to cart method → Add product to transaction
○ Show total method → Show total current transaction
○ Checkout method → Finalize transaction, return transaction data



*/

// Instructor's example



interface IProduct {

    name: string,
    price: number

}

interface ICartItem {

    product: Product1,
    quantity: number

}

class Product1 implements IProduct {

    name: string
    price: number

    constructor(name: string, price: number){

        this.name = name
        this.price = price

    }


}


class Transaction1 {

    private cart: ICartItem [] = []

    // tambah produk ke keranjang
    public addToCart(product: Product, quantity: number) {

        

    }

}


const 
