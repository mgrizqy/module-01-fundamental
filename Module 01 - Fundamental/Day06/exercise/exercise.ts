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
let compareVar : number[] = [];


for (let i = 0; i < arr8.length; i++) {



}




// 5. Write a function to find the difference in 2 given array
// b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] -> [1, 2, 6, 7] 

let arr10 : number [] = [1, 2, 3, 4, 5];
let arr11 : number [] = [3, 4, 5, 6, 7];

function findDifferenceTwoArray() {


let temp :number [] = [];
let temp1 :number [] = [];

for (let i = 0 ; i < arr10.length; i++) {

    for (let a = 0; a < arr10.length; a++){

        if (arr10[i] == arr11[a]) {
            console.log(`${i}`);
            
            arr10.splice(i, 1);

        } 
        else {

            temp.push(arr10[i]);

        }


    }

}

return temp;

}


console.log(findDifferenceTwoArray());
