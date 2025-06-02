// NUMBER : data angka
let jarak: number = 1500; // Nilai INT/INTEGER
let berat: number = 90.25; // Nilai FLOAT

// Arithmethic : +, -, *, /, %

// Algorithm kode perhitungan penjumlahan
// 1. menyiapkan data yang harus dijumlahkan
let angka1: number = 35;
let angka2: number = 120;
// 2. memproses penjumlahan dari data yang diberikan
const resultNum: number = angka1 + angka2;
// 3. menampilkan hasil akhir pennjumlahan di terminal
console.log(resultNum);


// Fungsi Math Object
const PiMath :number = Math.PI;
console.log(PiMath);

// Pembulatan nilai
console.log(Math.round(25.6))
console.log(Math.round(25.4))
console.log(Math.ceil(25.1))
console.log(Math.floor(25.9))

console.log(Math.pow(4, 2)); // Kuadrat atau eksponen
console.log(Math.sqrt(16)); // Akar
console.log(Math.cbrt(8)); // Akar pangkat 3

// MIN dan MAX
console.log(Math.min(1, 2, 3, 10, -20));
console.log(Math.max(1, 2, 3, 10, -20));

// Random
console.log(Math.random())

// Parsing data
let price :number = 25500;
console.log(price.toLocaleString("id",{
    style: "currency",
    currency: "IDR"
}));


