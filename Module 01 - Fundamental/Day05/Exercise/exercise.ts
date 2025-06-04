// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12,5,23,18,4,45,32] - {lowest : 4, highest : 45, average : 19.8xxx}


const arr:number[]= [12,5,23,18,4,45,32];
let print1 = "";

function findLowest() {

    let number :number= arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (number > arr[i]) {

            number = arr[i];
            
        }

    }
    
    return number;

}


function findHighest() {

    let number :number = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (number < arr[i]) {

            number = arr[i];

        }
    }
    
    return number;

}


function findAverage() {

    let number :number = 0;
    let sum :number = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }

    sum /= arr.length;

    return sum;

}

print1 = `{lowest : ${findLowest()}, highest : ${findHighest()}, average : ${findAverage()}}`;

console.log(print1);






// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example  arr = ["apple", "banana", "cherry", "date"] - "apple, banana, cherry, and date"


const arr1 :string[] = ["apple","banana","cherry","date"];

function buildStringWithAndAtTheEnd () {

    let print :string = "";

    for (let i = 0; i < arr1.length; i++) {
        
        if (i == arr1.length - 1) {

            print += `and ${arr1[i]}`

        } else {

            print += `${arr1[i]}, `

        }

    }

    return print;


}

console.log(buildStringWithAndAtTheEnd());




// 3. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] -> 2

const arr2 = [5, 3, 1, 7, 2, 6];

function findSecondSmallestNumber () {

let number :number = arr2[0];
let number2 :number = arr[0];

    for (let i = 0; i < arr2.length; i++) {

        if (number > arr2[i]) {

            number = arr2[i];

        }
    }

    for (let u = 0; u < arr2.length; u++) {

        if (number != arr2[u] && number2 > arr2[u]) {

            number2 = arr2[u];

        } 

    }


    
    return number2;
    
}

console.log(findSecondSmallestNumber());



// 4. Write a function to calculate each element in the same position from two arrays of integer. 
// Assume both arrays are of the same length
// a. Example : [1,2,3] + [3,2,1] -> [4,4,4]

const arr3 :number[] = [1,2,3];
const arr4 :number[] = [3,2,1];

function addTwoArray() {

let sumArray :number[] = [];

    if (true) {

        for (let i = 0; i < arr3.length; i++) {

            for (let u = 0; u < arr3.length; u++) {

                if (i == u) {
                    console.log(arr4[u]);
                    
                    if (arr3[i] != undefined && arr4[i] != undefined) {

                        sumArray.push(arr3[i] + arr4[i]);

                    }
                    
                    
                    
                }

            }

        }

    }

return sumArray;

}

console.log(addTwoArray());




// 5. Write a function that adds an element to the end of an array. 
// However, the element should only be added if it is not already in the array.
// a. Example : arr = [1,2,3,4], newElement = 4 -> [1,2,3,4]
// b. Example : arr = [1,2,3,4], newElement = 7 -> [1,2,3,4,7]


let arr5 :number[] = [1,2,3,4];
const newElement :number =  7;

function addElement_IfNotExist() {

    for (let i = 0; i < arr5.length; i++) {
        

        if (arr5[i] == newElement) {

            

            break;

        } else if (i == arr5.length-1) {

            arr5.push(newElement);

        }

        

    }

    

    return arr5;

}

console.log(addElement_IfNotExist());

