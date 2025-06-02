// STRING : data yang berisi karakter huruf, angka, atau simbol dan ditandai dengan simbol quotes ("")
let namaToko: string = "TOKO OLGA";
namaToko = "TOKO DONAT";

// Template Literal
let alamatToko :string = `Jl. Genteng Kali Surabaya`;

// Penggabungan data string
// Cara 1 : menggunakan penjumlahan + 
let printInfo :string = namaToko + " " + alamatToko + " Telp. 08272282";
console.log(printInfo);

// Cara 2 : Template literal
printInfo = `${namaToko} ${alamatToko} Telp. 903830`;
console.log(printInfo);

// Fungsi bawaan tipe data string
// string.length : menghitung panjang data string
let message :string = "Hello";
console.log(message.length)

// string.toLowerCase() : merubah semua karakter menjadi huruf kecil
console.log(message.toLowerCase())

// string.toUpperCase() : merubah semua karakter menjadi huruf besar
console.log(message.toUpperCase())

// string.includes() : memastikan suatu kata atau karakter ada didalam data string
console.log(message.includes("a"))


/*
Shift + Alt
Alt

Quokka :
Ctrl + K -> Q
*/

