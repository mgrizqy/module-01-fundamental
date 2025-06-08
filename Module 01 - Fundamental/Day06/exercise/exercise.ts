// 1. Write a function from a given array of mixed data types 
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] -> 3

const mixedArray :any [] = ["3", 1, "string", null, false, undefined, 2];

function countNumberInArray () {

    let temp :number = 0;

    for (let i = 0; i < mixedArray.length; i++) {

        if (typeof(mixedArray[i]) == "number") {

            temp += parseInt(mixedArray[i]);

        }
        

    }

    return temp;

}

console.log(countNumberInArray());



// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input.
// The array can only have maximum size from a given input. 
// (if the maximum size of the give input is 5 than the array can only contain 5 elements).
// a. Example : 
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

const numberTemp05 :number = 5;
const numberTemp10 :number = 10;
const numberTemp24 :number = 24;
const numberTemp03 :number = 3;
const numberTemp06 :number = 6;
const numberTemp07 :number = 7;
const numberTemp08 :number = 8;

const arraysMerged :number [] = 
[numberTemp05, numberTemp10, numberTemp24, numberTemp03, numberTemp06, numberTemp07, numberTemp08];

const maxSize :number = 5;

function arrayCapped5(arrayInput :number[]) {


    const newArrayCapped = arrayInput.filter((element,index) => {

        return index < maxSize

    });

    return newArrayCapped;


}

console.log(arrayCapped5(arraysMerged));




// 3. Write a function that will combine 2 given array into one array
// b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] -> [1, 2, 3, 4, 5, 6]

const arr6 : number [] = [1, 2, 3];
const arr7 : number [] = [4, 5, 6];
const arr9 : number [] = [];

function combineArrayTogether () {

    const temp :number [] = [];

    for (let i = 0; i < arr6.length + arr7.length; i++) {


        if (arr6[i] != arr6[arr6.length]) {

            arr9.push(arr6[i]);

        } else {

            arr9.push(arr7[i - arr6.length]);

        }

    }

    return arr9;

}

console.log(combineArrayTogether());





// 4. Write a function to find duplicate values in array
// b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] -> [2, 3, 5]

const arr8 :number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function findDuplicate (arrayVar) {
    

    const duplicate = arrayVar.filter((element, index, array) => {
    
        // Can directly send result on return with condition check
        return index != array.indexOf(element);
    
    } );

    // [] and ...new Set() to make new array with only unique values
    return [...new Set (duplicate)];

}


console.log(findDuplicate(arr8));











// 5. Write a function to find the difference in 2 given array
// b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] -> [1, 2, 6, 7] 

let arr10 : number [] = [1, 2, 3, 4, 5];
let arr11 : number [] = [3, 4, 5, 6, 7];

function findDifferenceTwoArray(array1 :any [], array2 :any []) {



    const temp :any [] = [];

    const result = temp.concat(array1,array2);
    console.log(result);
    

    const filteredResult = result.filter ((element,index,array) => {
 
        // Look for the next index of the given element
        return array.indexOf(element, array.indexOf(element) + 1) == -1;

    });

    


return filteredResult;

}


console.log(findDifferenceTwoArray(arr10,arr11));



// Alternative way :


function findDifferenceTwoArray1(array1 :any [], array2 :any []) {


const filteredResult1 = array1.filter((element,index,array) => {


    return !array2.includes(element);



    // for (let i = 0; i < array2.length; i++) {
        
        
    //     if (array[index] == array2[i]) {
            
            
    //         break;


    //     } else if (i == array2.length - 1) {

            

    //         console.log(element);
    //         console.log(index);
    //         console.log(i);
            
            
            

    //        return element;

    //     }

    // }
        
    


});


const filteredResult2 = array2.filter(element => {return !array1.includes(element)});

return [...filteredResult1,...filteredResult2]


}


console.log(findDifferenceTwoArray1(arr10,arr11));







////////////////////////////////



// 1. Based on array below write a function that will return primitive data types only.
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, "string"]

const arr12 :any [] = [1, [], undefined, {}, "string", {}, []];


function filterPrimtiveDataType (arrayInput :any []) {

    const filteredResult = arrayInput.filter(element => { return typeof(element) != "object"; }); 

    return filteredResult;

}


console.log(filterPrimtiveDataType(arr12));

// const test :any [] = [1,[],undefined];

// console.log(typeof(test[1]));





// 2. Write a function from the below array of number that will return sum of duplicates values
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40


const arr13 :number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];


function sumDuplicatesInArray(arrayInput :number []) {

    const filteredResult = arrayInput.filter((element,index,array) => { 

        return array.indexOf(element, array.indexOf(element) + 1) != -1

    });

    let sumDuplicates : number = 0;

    filteredResult.forEach((value) => { sumDuplicates += value });


    // Or.. use .reduce() to get the result of total values in array based on an operator, into a single value


    const sumResult = filteredResult.reduce((previousValue,currentvalue) => previousValue + currentvalue);


    return sumResult;

}

console.log(sumDuplicatesInArray(arr13));

