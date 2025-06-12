/*

Kisi-kisi exam modul 01:
- Introduction programming
(Pahami masalahnya, lalu buat pseudocode atau flow chart, baru membuat code)
- Data type (Primitive, Non-primitive)
- var, let dan const
- Introduction TS
- Looping statement
- Interface and Object declaration
- function hoisting
- Encapsulation
- Data Structure
- Big O Notation




*/


// Variable : penampung data


/*

Rumus penulisan variable => keywordVariable namaVariable = value;
keywordVariable : var, let, const
namaVariable :  - Tidak boleh diawali dengan angka
                - Boleh diawali simbol _ atau $
                - Jika terdiri dari lebih dari satu suku kata harus digabung dengan metode camelCase

*/


/// Karakter keyword variable

// Keyword var : redeclare, reassign, global variable

// Redeclare
var nama: string = "Abdi";
var nama: string = "Edo";

// Reassign
nama = "Aldo";

// Keyword let : non-redeclare, reassign, block-scoped variable
// Non-redeclare
let usia: number = 20;
// let usia: number = 15; // Cannot redeclare block-scoped variable 'usia'.ts(2451)

// Reassign
usia = 40;

// Contoh block-scoped variable
function introduce() {

    let usia :number = 15;
    return `Usiaku ${usia}`;

}

// keyword const : Non-redeclare, non-reassign, constant variable
const PI = Math.PI;
const listAngka : number [] = [2,3,4,5,2,6,3,4];

interface IHuman {

    nama: string,
    tanggalLahir: string,
    gender: "Pria"|"Wanita"

}

const human : IHuman = {

    nama: "Abdi",
    tanggalLahir: "2000-12-03",
    gender:"Pria"

}

// Looping statement : penulisan code yang ditujukan untuk mengulang eksekusi suatu code

/*

While loop : perulangan program yang akan selalu dijalankan selama kondisi masih terpenuhi
Aturan penulisan :

while (condition) {

    //code

}

Digunakan jika jumlah perulangan loop-nya tidak pasti

*/

let count: number = 1;

while (count <= 10) {

    console.log(`Loop ke-${count}`);
    count++;
    
}

while (true) {

    let random: number = Math.random();
    console.log(random);
    

    if (random < 0.25) {{

        break;

    }}  

}


/*

Do...While
Aturan penulisan :

do {

    //code

} while (condition) 



*/


let counter : number = 1;

do {

    console.log(counter);
    counter++;

} while (counter < 10);


/*

For Loop : digunakan ketika batas looping ditentukan sejak awal

Aturan penulisan :

for (counterDeclaration ; counter_condition ; counter) {

    //code

}

*/

for (let i:number = 1; i < 10; i++) {

    console.log(i);
    

}

// for...in  : looping yang berkaitan dengan tipe data object

for (const property in human) {

    console.log(property);
    console.log(human[property]);
    
}

console.log(human.nama);
console.log(human["nama"]);


// for...of : looping yang berhubungan dengan akses value data array

const listProduct: string [] = ["Kopi", "Teh", "Es Jeruk"];

for (const value of listProduct) {

    console.log(value);
    

}


// Note : Nested loops saat berurusan dengan 2 array

// Array : tipe data yang mampu menampung berbagai macam tipe data lain
/*

Ciri-ciri : - Data yang disimpan kedalam array akan dibungkus kurung siku, contoh : [1, 2, 3]
            - Setiap data yang disimpan didalam array, akan memiliki alamat index yang dimulai dari 0



*/


const listSiswa: string [] = ["Aldo", "Aldi"];

interface ISiswa {

    nama: string;
    kelas: "IPA" | "IPS";
    nis: string;

}


const listSiswa2 : ISiswa [] = [

    {

        nis: "01231244", // Nomor yg tidak digunakan untuk menghitung dan hanya untuk di display, gunakan string
        nama: "Aldo",
        kelas:"IPA"

    },

    {

        nis: "33450500",
        nama: "Aldi",
        kelas: "IPS"

    }

];

console.log(`${listSiswa2[0]}`);

// JSON
const stringObject = `${JSON.stringify(listSiswa2[0])}`;
console.log(typeof stringObject);
console.log(stringObject);
console.log(JSON.parse(stringObject));
console.log(typeof JSON.parse(stringObject));


// Function : cara untuk menyatukan sekumpulan program yang ditujukan untuk menyelesaikan tugas khusus

/*

Kategori : Built-in function dan User-defined
Aturan penerapan function :
- Function harus tersedia lebih dulu
- Penamaan function mengikuti aturan penamaan variable
- Secara opsional bisa menerima parameter/argumen : 
    penampung data dari function untuk menerima data dari luar function
- Function secara opsional bisa menghasilkan output melalui keyword return didalamnya
- Opsi penulisan function ada tiga : Declarative func, Func. Expression dan Arrow Function


*/


/* 

Declarative function :

function namaFunc(param1?, param2?,...) {

    //code

}

*/

function penjumlahan() :number {

    let angkaA: number = 2;
    let angkaB: number = 3;

    const result: number = angkaA + angkaB;

    return result

}

console.log(penjumlahan());


function pengurangan (angkaA :number, angkaB) {

    const result: number = angkaA - angkaB;
    return result;

}

console.log(pengurangan(5,3));



/* 

Function expression :

const namaFunc = function (param1?, param2?,...) {

    //code

}

*/

const pengurangan1 = function () {

    const angkaA: number = 3;
    const angkaB: number = 2;

    const result: number = angkaA - angkaB;

    return result


}

console.log(pengurangan1());


const pengurangan2 = function (angkaA: number, angkaB: number) {

    const result: number = angkaA - angkaB;

    return result


}

console.log(pengurangan2(2,3));


/* 

Arrow function :

const namaFunc = (param1?, param2?,...) => {

    //code

}

*/

const perkalian = () => {

    let angkaA: number = 10;
    let angkaB: number = 20;

    const result: number = angkaA * angkaB;


    return result;

}


const perkalianB = (angkaA: number, angkaB:  number) => angkaA * angkaB;


console.log(perkalianB(20,20));



// Function hoisting : 
//      Function bisa dieksekusi sebelum deklarasi function itu sendiri. Hanya berlaku untuk declarative function



