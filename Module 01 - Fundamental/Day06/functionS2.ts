// Callback Function :  - sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter
//                      - sebuah fungsi yang langsung dibuat didalam parameter fungsi lain


/* Aturan penulisan :

function mainFunction (callbackFn) {
    callbackFn();


}

- callbackFn : parameter yang harus diisi dengan fungsi

*/


// mainFunction declaration
function printCalculation(callbackFn) {

// menjalankan fungsi dari parameter callbackFn dan ditampung output kedalam variable result
const result = callbackFn(); 

return `Hasil perhitungan dari callback adalah ${result}`;


}


console.log(
    
    printCalculation(function (){
        
        
        let angkaA :number = 10;
        let angkaB :number = 30;
        
        
        return angkaA + angkaB; 
        
    }));
    
    
    // Arrow function
    console.log(
        
        printCalculation(() => {
            
            let numbA :number = 20;
            let numbB :number = 3;
            
            return numbA * numbB;
            
        }));
        
        
        
        // mainFunction declaration (main function kirim value ke callbackFn sebagain penampung parameter)
        function printCalculation1(callbackFn) {
            
            let angkaA :number = 10;
            let angkaB :number = 30;
            // menjalankan fungsi dari parameter callbackFn dan ditampung output kedalam variable result
            const result = callbackFn(angkaA,angkaB); 
            
            return `Hasil perhitungan dari callback adalah ${result}`;
            
            
        }
        
        console.log(printCalculation1(function (angkaA :number,angkaB :number){
                
                console.log(angkaA);
                console.log(angkaB);
                
                return angkaA + angkaB; 
                
            }));
        
        
        
// Array function : forEach, map, filter
// array.forEach(callbackFn) : sebagai pilihan for loop untuk mengangakses isi dari tiap data array

const students : string[] = ["Abdi", "Edi", "Aldo"];

// for loop

for (let index = 0; index < students.length; index++) {

const value = students[index];
console.log(`${index + 1}. ${value}`);


}



students.forEach((value, index)=> {

console.log(`${index + 1}. ${value}`);

});



// Duplikasi cara kerja array.forEach
function duplicateForEach(arrayData: any [], callbackFn) {

    let value :any ;
    let index :number;

    for (let i = 0; i < arrayData.length; i++) {

       value = arrayData[i];
       index = i;
       callbackFn(value,index);
        
    }

    
}



duplicateForEach(students,(value: any, index: number) => {

console.log(`${index + 1}. ${value}`);

});





// array.map(callbackFn) : untuk merubah seluruh data array menjadi data array baru
// [1, 2, 3] -> [2, 4, 6]
// ["Abdi", "Edo", "Aldo"] -> ["1. Abdi", "2. Edo", "3. Aldo"]
// ["Abdi", "Edo", "Aldo"] -> ["Nama saya Abdi", "Nama saya Edo", "Nama saya Aldo"]
// [1, 2, 3] -> ["Ganjil", "Genap", "Ganjil"]
// [1, 2, 3] -> ["1", "2", "3"]
// [1000, 2000, 3000] -> ["Rp. 1000", "Rp. 2000", "Rp. 3000"]


const dataArray: any[] = [1, 2, 3, 4, 5];

const newArray = dataArray.map((value, index) =>{

return value * 2;

})

const uang: number[] = [2000, 5000, 10000];

console.log(newArray);

const newUang = uang.map((value) => {

    return value.toLocaleString("id", {

        style: "currency",
        currency: "IDR"

    });
    
});

console.log(uang);

console.log(newUang);

// Exercise Duplicate map

function duplicateMap (arrayData: any[], callbackFn) {
    
    let value :number;
    let temp : number[] = [];

    for (let i = 0; i < arrayData.length; i++) {

        value = arrayData[i];
        temp.push(callbackFn(value));

    }

    console.log(temp);
    

    return temp;
    
}

const numberToCurrency = duplicateMap (uang, function (value){
    
    
        return value.toLocaleString("id", {
    
            style: "currency",
            currency: "IDR"
    
        });
    
    
});

console.log(numberToCurrency);


// array.filter(callbackFn) : untuk menghasilkan array baru sesuai acuan filter yang diberikan
// [1, 2, 3, 7, 20, 12] -> [2, 20, 12]

const angka :number[] = [1, 2, 3, 7, 20, 12];

const angkaGenap :number[] = angka.filter((value, index) => {

    return value % 2 === 0;

});

const angkaGanjil :number[] = angka.filter((value, index) => {

    return value % 2 !== 0;

});

console.log(angkaGanjil);


