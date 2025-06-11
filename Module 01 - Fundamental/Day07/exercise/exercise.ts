

/*

Exercise 1

● Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
● Highest
● Lowest
● Average
■ Age
● Highest
● Lowest
● Average

*/

// Attempt 1
class Student {

    private name: string = "";
    private email: string = "";
    private age: number;
    private score: number = 0;

    constructor (name: string, email: string, age : string, score: number) {

        this.name = name;
        this.email = email;
        const test = new Date(age);
        this.age = new Date().getFullYear() - test.getFullYear();
        this.score = score;

    }

    getName() {

        return this.name

    }

    getEmail() {

        return this.email

    }

    getAge() {

        return this.age

    }

    getScore() {

        return this.score

    }

}

//const studentArray [] = [];

const student01 = new Student("Bolang", "bolang123@gmail.com", "2002-03-10", 75);
const student02 = new Student("Groot", "iAmGroot@gmail.com", "1650-10-20", 35);
const student03 = new Student("Reed Richard", "fantastic4@gmail.com", "1990-05-25", 100);

const studentData : Student [] = [student01,student02,student03];




function calculateStudentsScores (studentArray : Student []) {

    let highest :number = studentArray[0].getScore();
    let lowest :number = studentArray[0].getScore();
    let average :number = 0;

    // find the highest score

    for (let i = 0; i < studentArray.length; i++) {

        if (highest < studentArray[i].getScore()) {

            highest = studentArray[i].getScore();

        }

    }
    
    // find the lowest score

    for (let i = 0; i < studentArray.length; i++) {

        if (lowest > studentArray[i].getScore()) {

            lowest = studentArray[i].getScore();

        }

    }


    // calculate average

    for (let i = 0; i < studentArray.length; i++) {

        average += studentArray[i].getScore();

    }

    average = Math.round(average / studentArray.length); 

    return `Highest score : ${highest}, lowest score : ${lowest}, average score : ${average}`

}



function calculateStudentsAge (studentArray : Student []) {

    let highest :number = studentArray[0].getAge();
    let lowest :number = studentArray[0].getAge();
    let average :number = 0;

    // find the highest score

    for (let i = 0; i < studentArray.length; i++) {

        if (highest < studentArray[i].getAge()) {

            highest = studentArray[i].getAge();

        }

    }
    
    // find the lowest score

    for (let i = 0; i < studentArray.length; i++) {

        if (lowest > studentArray[i].getAge()) {

            lowest = studentArray[i].getAge();

        }

    }


    // calculate average

    for (let i = 0; i < studentArray.length; i++) {

        average += studentArray[i].getAge();

    }

    average =  Math.round(average / studentArray.length); 

    return `Highest age : ${highest}, lowest age : ${lowest}, average age : ${average}`

}

console.log(calculateStudentsScores (studentData));
console.log(calculateStudentsAge (studentData));





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


class Product {


    name: string;
    price: number;
    quantity: number;


    constructor(name :string, price :number, quantity :number){


        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }



}


const test : Product [] = [new Product("Kipas angin Portable", 200000, 1), new Product("Sikat gigi", 70000, 2)];



class Transaction {


    total :number = 0;
    product : Product [];


    constructor(product :Product []) {


        product.forEach ((value,index,array) =>  {
            
            if (array[index].quantity > 1) {


                this.total += value.price * array[index].quantity;


            } else {


                this.total += value.price


            }
            
        
        });


        this.product = product;



    }


    addToCart(product :Product ) {


        console.log(this.product.findIndex((element,index,obj) => { return obj[index].name == product.name }));
        
        const productIndex  :number = this.product.findIndex((element,index,obj) => { return obj[index].name == product.name });


        this.total += (product.price * product.quantity);


        if (productIndex != -1) {





            this.product[productIndex].quantity += product.quantity;
                
                
        }   else {


            this.product.push(product);


        }



    }
    
    showTotal() {


        const totalPrice : string = this.total.toLocaleString("id", { style: "currency", currency: "IDR"});
        let printProducts = `Products : `;
        this.product.forEach((value,index,array) => { 


            if (array[index].quantity > 1) {


                printProducts += `${array[index].quantity} `;


            }


            printProducts += `${value.name}`;


            if ( index != array.length - 1 ) {


                printProducts += `, `;


            }          
         });



         return `Total price : ${totalPrice}; ${printProducts}`


    }
    
    checkOut() {


        //let checkOutMessage : string = `Payment successful. ${this.showTotal()}`;
        const totalPrice : string = this.total.toLocaleString("id", { style: "currency", currency: "IDR"});
        return {total: totalPrice, products: this.product}
    }



}


const test2 : Transaction = new Transaction(test);


console.log(test2.showTotal());
test2.addToCart(new Product("Playstation 6",12000000,3));
test2.addToCart(new Product("Playstation 6",12000000,1));
test2.addToCart(new Product("Playstation 6",12000000,8));
console.log(test2.showTotal());


console.log(test2.checkOut());
