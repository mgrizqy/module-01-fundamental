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




