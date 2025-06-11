/*

● Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example :
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
● Result :

ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]

*/

interface IStudent {

    name: string,
    email: string

}

const arrayStudent1 : IStudent [] = [

    { 
        name: "Student 5",
        email: "student5@mail.com"
    },

    { 
        name: "Student 1",
        email: "student1@mail.com"
    },

    {

        name: "Student 2",
        email: "student2@mail.com"

    }

];

const arrayStudent2 : IStudent [] = [

    { 
        name: "Student 1",
        email: "student1@mail.com"
    },

    {

        name: "Student 3",
        email: "student3@mail.com"

    },
        { 
        name: "Student 5",
        email: "student5@mail.com"
    }

];

//console.log(arrayStudent1[0].email);

const dump : number [] = [1,2,3,4,5,1,5,6,1,7,8,8,9];

//console.log(dump.findIndex((number,index) => number == 1 && index > 8 ));
//console.log(dump.indexOf(1,9));


function mergeStudentArray (array1: IStudent[], array2: IStudent[]) {

    const mergedArray : IStudent [] = [...array1,...array2]

    //let newArray : IStudent [] = [];

    
    console.log(mergedArray);
    
    let tag :number [] = [];


    for (let i = 0; i < mergedArray.length; i++) {

        for (let u = 0; u < mergedArray.length; u++) {

            if (i < u) {

                console.log(mergedArray[i].name);
                console.log(u);
                
                if (mergedArray[i].name == mergedArray[u].name && mergedArray[i].email == mergedArray[u].email) {
    
                    console.log(mergedArray[i].name);
                    console.log(i);
                    
                    console.log(u);
                    mergedArray.splice(u,1)
                    //tag.push(u);
                
                    
    
                }

            }


        }

    }

    console.log(tag);
    

    return mergedArray;

}


console.log(mergeStudentArray(arrayStudent1,arrayStudent2));


/*

Exercise 2

● Create a function that can accept input as an array of objects and switch all values into property and
property into value
● Example :
○ Input : [{ name: ‘David’, age: 20 }]
○ Output : [{ David: ‘name’, 20: ‘age’}]

*/

interface IDtemp {

    name:string,
    age:number;

}




const tempInput : IDtemp = {name: `David`, age: 20};

console.log(tempInput);

for (const key in tempInput) {

    console.log(tempInput[key]);
    

}




const entries = Object.entries(tempInput);
console.log(entries);

const switchEntries = entries.map(([key, value]) => [value,key]);
console.log(switchEntries);

const switchObject = Object.fromEntries(switchEntries);
console.log(switchObject);



/*

Exercise

● Create a function to find a factorial number using recursion
● Example
○ Input : 5
○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120


*/


function factorial(number :number) {

    if (number === 0 || 0 === number) {

        return 1;

    } else {

        return number * factorial(number-1);

    }


}


console.log(factorial(5));

