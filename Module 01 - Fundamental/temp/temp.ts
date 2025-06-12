const numsTemp : number [] = [1,3,5,6];

const num : number = 2;

function searchInsert(nums: number[], target: number): number {
    
let temp = nums.indexOf(target);

if (temp != -1 ){

    return temp

} else  {


nums.find((element,index,array) => {


    if (array[index] < target && target < array[index + 1] || array[index] < target  ){

        temp = array[index] + 1;

        return true
        

    } else if (array[index] > target) {

        temp = array[index] - 1;

        return true

    }


    
return temp


});



    
}

};

console.log(searchInsert(numsTemp,num));

