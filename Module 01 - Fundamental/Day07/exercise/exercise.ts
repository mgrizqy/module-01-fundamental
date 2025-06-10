

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


    
}
