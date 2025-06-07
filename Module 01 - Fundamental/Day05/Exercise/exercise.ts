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



/// Second attempt on finding second smallest number, with sorting

/* Pseudocode

1. Set the for loops (or other looping tools), and helper or temp variable
2. Create condition that compares 2 values of which is bigger
3. Then swap the position between index (using the temp variable), the larger should go to the right (higher index)
4. Repeat the process until there largest to the smallest shorted out from rigt to left.

a. Example : numbers = [5, 3, 1, 7, 2, 6] -> 2
*/


function findSecondSmallestNumber_BySorting (arrayOriginal :number []) {
    
    
    let isNotSorted : boolean = true;
    let counter :number = 0;
    let swapCounter :number = 0;
    const array : number[] = [...arrayOriginal]; // To prevent changing the array which is being passed
    

    while (isNotSorted) {
        



        // Always put the checks at front
        if (counter == array.length - 1) {

            if (swapCounter > 0) {

            counter = 0;
            swapCounter = 0;

            } else if (swapCounter == 0) {

                isNotSorted = false;

            }

        } else if (array[counter] > array[counter + 1]) {
            
            console.log(`${array[counter]} > ${array[counter + 1]}`);
            
            let temp :number = 0;

            temp = array[counter];
            array[counter] = array[counter + 1];
            array[counter + 1] = temp;

            swapCounter += 1;
            counter += 1;
        
        } else {

            counter += 1;

        }
    
        
    
    
    }

    



    // for (let i = 0; i < array.length; i++) {

    //     if (array[i] > array[i + 1]) {

    //         console.log(`${array[i]} > ${array[i+1]}`);
            

    //         temp = array[i];
    //         array[i] = array[i + 1];
    //         array[i + 1] = temp;

     
            

    //     }
    
    // }
    
    


return `The sorted array : ${array}, and the second smallest number : ${array[1]}`;


}


console.log(findSecondSmallestNumber_BySorting(arr2)); 
// ' The sorted array : 1,2,3,5,6,7, and the second smallest number : 2'

console.log(arr2); 
// Array(6) [ 5, 3, 1, 7, 2, 6 ]




// Or this

 
function findSecondSmallestNumber_BySorting_UsingWhileNestedFor (arrayOriginal :number []){

    const array : number[] = [...arrayOriginal]; // To prevent changing the array which is being passed
    

    let isSorted :boolean = false;


    while (!isSorted) {

        isSorted = true;

        for (let i = 0; i < array.length - 1; i++) {


            if (array[i] > array[i + 1]) {

                let temp :number = 0;

                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                isSorted = false;

            }


        }


    }

    return array;


}


console.log(findSecondSmallestNumber_BySorting_UsingWhileNestedFor(arr2)); 
// result : Array(6) [ 1, 2, 3, 5, 6, 7 ]

console.log(arr2);





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


