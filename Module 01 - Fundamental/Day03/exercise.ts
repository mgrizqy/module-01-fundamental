/* Soal 1 - cek angka ganjil atau genap

Write a code to check whether the number is odd or even

o Example: 25 → odd number, 2 → even number

*/ 

const input :number = 5;

if ((input % 2) == 0) {

    console.log(`${input} is an even number`);

} else {

    console.log(`${input} is an odd number`);

}


/* Soal 2 - cek angka prima atau tidak

Write a code to check whether the number is prime number or not

o Example: 7 → 7 is a prime number

o Example: 6 → 6 is not a prime number

*/


const numberD :number = 7;
let temp :number = 0;
let factorCounter :number = 0;

if (numberD > 1) {

    for (let i :number = 0; i < numberD;  i++) {

        //console.log(i + 1);

        if ((numberD % (i+1)) == 0) {

            factorCounter += 1;
        }

        //console.log((numberD % (i+1)));

    }

    //console.log(factorCounter);

    if (factorCounter > 2) {

        console.log(`${numberD} is not a prime number`);

    } else {

        console.log(`${numberD} is a prime number`);

    }

}



/* Soal 3 - total pertambahan dari angka 1 ke N

Write a code to find the sum of the numbers 1 to N

o Example: 5 → 1+2+3+4+5= 15

o Example: 3 → 1+2+3 = 6

*/


const numberA :number = 5;
let total1 :number = 0;

for (let i : number = 1; i <= numberA; i++) {

    total1 += i;

}

console.log(total1);




/* Soal 4 - factorial dari sebuah angka

Write a code to find factorial of a number

o Example: 4! 4 x 3 x 2 x 1= 24

o Example: 6! 6 x 5 x 4 x 3 x 2 x 1 = 720


*/

const numberFactorial :number = 4;
let total2 :number = 1;

for (let i : number = 1; i <= numberFactorial; i++) {

    total2 *= i;

}

console.log(total2);



/* Soal 5 - Angka fibonacci

Write a code to print the first N fibonacci numbers

o Example: 15 → 610

*/

const fibonacciNumber :number = 15;
let counter1 :number = 0;
let numberB :number = 0;
let numberC :number = 1;
let total3 :number = 0;
let checker :string = "0 + 0 = 0, ";


while (true) {

    total3 = numberB + numberC;
    
    checker += `${numberB} + ${numberC} = ${total3}, `;
    counter1 += 1;
    numberB = numberC;
    numberC = total3;

    if (counter1 == (fibonacciNumber - 1)) {
        break;
    }

}

//console.log(checker);

console.log(total3);
