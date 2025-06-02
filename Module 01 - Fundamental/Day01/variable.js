// VARIABLE : penampung atau label data

/*
- Rumus penulisan variable ==> keywordVariable namaVariable = data;
- keywordVariable : var, let, const
- namaVariable : - Harus diawali dengan huruf atau _ atau $
                 - Jika terdiri dari dua suku kata atau lebih, maka tidak boleh dipisah dengan spasi.
- data : tipe data yang ingin disimpan diantaranya string, number, boolean, undefined, array, object.
*/

// Mendeklarasikan variable
var namaMurid;

// Meng-inisialisasi variable
var usiaMurid = 17;

// Karakter tiap keyword variable
// Keyword var : re-declare, re-assign

// Re-declare
var alamat = "Jl. pemuda Surabaya";
var alamat = "Sukolilo Surabaya"; // membuat ulang variable yang sudah ada

// Re-assign
alamat = "Rungkut Surabaya";


// Keyword let : non-redeclare, reassign
let program = "Web Development";
// let program = "Digital Marketing"; // non-redeclare
program = "Data Science";

// Keyword const : non-redeclare, non-reassign
const PI = 3.14;
const UrlDomain = "https://google.com";

/* number */ let nomorHP;