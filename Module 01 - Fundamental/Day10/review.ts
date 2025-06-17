// Callback function : - sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter


/*

function mainFunction(callbackFn) {

    // code
    callbackFn();

}

- callbackFn : parameter yang harus diisi dengan function


*/



function mainFunction(callbackFn) {

console.log(callbackFn())


}

mainFunction(function () {

    return "Hello";

})

function printCalculation(cb) {

    let angkaA: number = 20;
    let angkaB: number = 10;

    return `Hasil perhitungan adalah ${cb(angkaA,angkaB)}`

}

const calculate: string = printCalculation(function (angkaA: number, angkaB: number) {

    return angkaA + angkaB;

});

console.log(calculate);




const dataArr : any[] = [1, 2, 3, 2, 4, 6, 4, 3, 2];

// array.forEach(cbfn) : untuk mengakses isi dan index dari tiap data array

dataArr.forEach((value: number, index: number) => {

    console.log(value);
    

})


// array.map(cbfn) : untuk merubah seluruh data array dan dijadikan data array baru
const newDataArr : number [] = dataArr.map((value: number) => {

    return value * 2;

});

console.log(newDataArr);


// array.filter(cbfn) : untuk mencari data sesuai acuan filter dan menampungnya kedalam array baru

const filterArr = dataArr.filter((value:number) => {

    return value % 2 !== 0;

});

console.log(filterArr);


// Object : tipe data yang dapat menampung tipe data lain dan tiap data ditampung kedalam property

/*

Aturan penulisan :
Cara 1 :

const object = {

    namaProperty : value,
    name : "Edi",
    usia : 18,
    isActive : true,
    grade : ["A", "B", "C"],
    getInfo : function() {
    
        //code
    
    }

}

Cara 2 :

const object = new Object();
object.name = "Edi";
object.usia = 15;



Cara 3 :

class MyObj {

    constructor(name, usia){
    
    this.name = name;
    this.usia = usia;
    
    }

}

*/

interface IHumanB {

    name : string;
    age : number;
    gender : "Male" | "Female";
    isAlive : boolean;

}

// Cara 1
const dataHuman : IHumanB = {

    name: "Edia",
    age: 17,
    gender: "Male",
    isAlive: true,

}

// Cara 2
const dataHumanB : any = new Object();
dataHumanB.name = "Edo";
dataHumanB.age = 17;
dataHumanB.gender = "Male";
dataHumanB.isAlive = true;

// Cara 3
class Human implements IHumanB {

    name: string;
    age: number;
    gender: "Male" | "Female";
    isAlive: boolean = true;
    private religion : string = "Islam"; // Encapsulation : menyembunyikan property
    

    constructor(_name: string, _age: number, _gender: "Male" | "Female") {
      
        this.name = _name;
        this.age = _age;
        this.gender = _gender;

    } 

    

}


const data2: Human = new Human("Aldi", 20, "Male"); // instance
console.log(data2);





// Inheritance : pewarisan data dari class utama. supaya class turunan memiliki porperty dari class utama

// implements : menentukan property - property yang harus diisi atau di declare dlm class atau interface, berdasarkan interface yang direferensi
// extends : inheritance, mengambil property dari referensi class lain


class EmployeeB extends Human {

    position: string;
    salary: number;

    constructor(_name:string, _age:number, _gender: "Male" | "Female", position:string, salary: number) {

        super(_name, _age, _gender);
        this.position = position;
        this.salary = salary;

    }

}


const employee1 : EmployeeB = new EmployeeB ("Irfan", 15, "Male", "Front-end", 5000000);

console.log(employee1);

// Destructure : mengeluarkan nilai dari property object menjadi variable yang berdiri sendiri
const {name : nama10, age, isAlive, gender} = employee1;

console.log(age);
console.log(gender);
console.log(nama10);





