// LOOPING STATEMENT : penulisan code yang ditujukan untuk mengulang eksekusi suatu program hingga kondisi tertentu


console.log("1. Edo");
console.log("2. Abdi");
console.log("3. Andre");


/*

WHILE LOOP : Perulangan program yang akan selalu berjalan selama kondisi masih terpenuhi

Aturan penulisan :

while(condition) {

    //code

}

condition : kondisi yang diinginkan dalam bentuk boolean (TRUTHLY / FALSY / COMPARISON / LOGICAL)

*/


let count :number = 1;


while (count <= 10) {

    console.log(count);
    count++; // count = count + 1;
    //count += 2; // count = count + 2;

}

let isBoolean :boolean = true;


while (isBoolean) {

    count++;

    if (count === 15) {

        console.log(count);
        isBoolean = false;

    }

}


while (true) {

    count++;

    if (count === 25) {

        console.log(count);
        break;

    }

}


/*

DO...WHILE

Aturan penulisan :

do{

    //code

} while (condition)

*/


let counter :number = 1;

do{

    console.log(counter);
    counter++;


} while (counter < 4);


// FOR LOOP : Digunakan ketika batas looping sudah ditentukan sejak awal

/*

for(counter_declaration; counter_condition; counter){


- counter_declaration : variable yg mendefinisikan nilai awal dari hitungan batas looping
- counter_condition : kondisi untuk menentukan batas looping
- counter : proses perhitungan increment atau decrement

}

*/


for (let i : number = 0; i < 10; i++) {

    console.log(i);

}




const limit = 5;
let cetak :string = "";

for (let i : number = 0; i < limit; i++) {

    if ((i % 2) === 0) {
        cetak += `${i} : GENAP | `;
    }
    else {
        cetak += `${i} : GANJIL | `;
    }

}


console.log(cetak);



