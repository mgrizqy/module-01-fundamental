// Function :

/*

Definisi : Sekumpulan program yang disatukan untuk mengerjakan proses khusus yang biasanya bersifat reusable.

Kategori : Built-in function dan User-defined function

Aturan penulisan :

- Penamaan function mengikuti aturan nama variable
- Bisa menerima parameter/argumen : penampung dari function, untuk menerima nilai dari luar function
- Function biasanya menghasilkan nilai output melalui keyword return didalamnya
- Opsi penulisan bisa menggunakan Declarative Func, Function Expression atau Arrow Function

*/

// Contoh tanpa function
// INPUT : dua variable yang menampung data untuk dijumlahkan
let angkaA :number = 10;
let angkaB :number = 13;
// PROCESS : memproses penjumlahan kedua variable
const hasil :number = angkaA + angkaB;
// OUTPUT : menampilkan hasil penjumlahan
console.log(hasil);


// Buat kode diatas mennjadi Declarative Function

/*

Declarative func :

function namaFunc(parameter){
   // code
}

*/


// Membuat function

function penjumlahan(){

    let angkaA :number = 2;
    let angkaB : number = 5;

    const hasil :number = angkaA + angkaB;

    return hasil;

}

console.log(penjumlahan());



// Function with parameter for reusable

function pengurangan(angkaA :number, angkaB :number){

const hasil :number = angkaA - angkaB;
return hasil;

}

console.log(pengurangan(4,2));



