


  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

  const testp : ListNode | null  = new ListNode(4);
  const testpo : ListNode | null  = new ListNode(2,testp);
  const testp2o : ListNode | null  = new ListNode(1,testpo);

  const testp3 : ListNode | null  = new ListNode(4);
  const testpo3 : ListNode | null  = new ListNode(3,testp3);
  const testp2o3 : ListNode | null  = new ListNode(1,testpo3);

  let testeee = [2]
const testeee1 = [3]



    





function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let current : ListNode | null = new ListNode ();
    let current2 : ListNode | null = new ListNode ();
    


    let newLinkedList : ListNode | null = new ListNode(-1,null);
    let tempp = newLinkedList; 

    let isTrue = true;

while (isTrue) {

    
    

      if ( list1 != null && newLinkedList.next == null) {

        console.log("asd");
  
          if (list1.val >= list2.val) {
  
              tempp.val = list2.val ;
              tempp.next = new ListNode(list1.val)
  

              
              current = list2.next;
              current2 = list1.next;

              console.log(current);
              console.log(current2);
              
              
              
            } else {
                
                tempp.val = list1.val ;
                tempp.next = new ListNode(list2.val)
    
  
                
                current = list1.next;
                current2 = list2.next;
  
                console.log(current);
                console.log(current2);


          }
  
      } else if (current == null || current2 == null) {
        
  
          isTrue = false;
          
          
          
    } else {
        
        if (current.val >= current2.val) {
            //console.log(newLinkedList);
            

           tempp = tempp.next;
            
            tempp.next = new ListNode(current2.val);
            tempp.next.next = new ListNode(current.val);

            current = current.next;
            current2 = current2.next;


            tempp = tempp.next;
            
            
        } else {
            
            tempp = tempp.next;
             
             tempp.next = new ListNode(current.val);
             tempp.next.next = new ListNode(current2.val);
 
             current = current.next;
             current2 = current2.next;
 
 
             tempp = tempp.next;


          }
          
      }

}

return newLinkedList

}

console.log(mergeTwoLists(testp, testp3));
console.log(testp);
console.log(testp3);

const nums = [1,2,3]




console.log(nums.slice(1,2))


const dawd = ["dasd","segseg"]

console.log("segsseg" in dawd);



console.log(nums.slice(0,nums.length - (nums.length / 2) ));


function containsDuplicate(nums: number[]): boolean {

let isTrue = false;

nums.find((element, index, obj) => {


if (obj.indexOf(element, index + 1) != -1)

    isTrue = true;
    return

})

 return isTrue

};

console.log(containsDuplicate(nums));




function containsNearbyDuplicate(nums: number[],k : number): boolean {
    
const win = new Set<number>();






for (let i = 0; i < nums.length; i++) {
    console.log(win);

    if (win.has(nums[i])){

        return true

    }

    win.add(nums[i]);

    if (win.size > k) {

        win.delete(nums[i-k])

    }
}

console.log(win);

return false;

};




console.log(containsNearbyDuplicate(nums,3));


function majorityElement(nums: number[]): number [] {
    
    const test = new Map<number,number>();


    let number :number = 0;
    let frequentNumber : number [] = [nums[0]];


    for (const i of nums) {


        //console.log(i);
            
        test.set(i, (test.get(i) ?? 0 ) + 1)


        console.log(`${test.get(i)} > ${number}`);


        console.log(test.get(i) > number);
        


        if (test.get(i) > number) { 


            number = test.get(i);
            
            frequentNumber[0] = i;
            


        }
        


    }
    
    if (test.get(frequentNumber[0]) > 1) {

        return frequentNumber;

    } else if (nums.length >= 3) {

        return []

    } else {

        return nums

    }
    


    


    


};

//console.log(majorityElement(nums));



/*

Bandingkan antara string sekarang dengan default brackets, jika ada, maka itu 

*/

function isValid(s: string): boolean {
    
    let brackets : string [][] = 
    [
        ["(",")"], 
        ["[","]"], 
        ["{","}"]   ]

    let stack : string = ""
    let currentString : string = ""

    //console.log(brackets[1]);
    

    let splittedString : string [] = s.split("");
    //let lastOpenBracket : string = "";
    
    //console.log(splittedString);

    console.log(s.length);
    

if (s.length < 2) {

    return false

}


    for (let i = 0; i < splittedString.length; i++) {

        for (let u = 0; u < brackets.length; u++){



                for (const x in brackets[u]) {

                if (splittedString[i] == brackets[u][0]) {

                    console.log(splittedString[i]);
                    stack += splittedString[i];
                    currentString = splittedString[i];

                    
                    
                    

                    
                    

                } else if (splittedString[i] == brackets[u][1] && currentString != brackets[u][1]) {
                    

                    

                    if (splittedString[i-1] == currentString && currentString != brackets[u][0] ) {

                        console.log(brackets[u][1]);
                        return false
                        
                        

                    } else {


                        console.log(splittedString[i]);
                        stack += splittedString[i];
                        currentString =splittedString[i];
                        

                    }
                    
                    

                } else if (parseInt(x) == 1 && brackets[u][x] == splittedString[i+1] ) {

                        
                        console.log(brackets[u][x]);
                        

                } else {

                        console.log(i);
                        
                        return false

                    }
                
                

                }

    }
    
    
};

//console.log(stack);
//console.log(currentString);


return true

}
let s : string = "((";
//console.log(isValid(s));



let strs :string [] = ["flower","flower","flower","flower"]







function longestCommonPrefix(strs: string[]): string {
    
    let charStack : string = "";
    let isTrue : boolean = true;  
    let counter : number = 0;  

    while (isTrue) {

        isTrue = false

        

        for (let i = 0; i < strs.length; i++) {

           if (charStack[counter] == undefined && strs[i][counter] != undefined) {
                console.log(strs[i][counter]);

                
                charStack += strs[i][counter];

           } else if ( charStack[counter] != undefined ) {

                if (strs[i][counter] == charStack[counter] ) {
                    //console.log(strs[i][counter]);
                    
                    
                    isTrue = true;
                    continue;  

                } else {

                    charStack = charStack.slice(0,charStack.length -1)
                    isTrue = false;
                    break;

                }
                

           } else {

            charStack += "";
            return charStack

           }

        }

        
        counter++;



    }
    
    console.log(charStack);
    //console.log(counter);
    
    return charStack;
    

};


//console.log(longestCommonPrefix(strs));

let nums2 = [5,7,7,8,8,10]



function searchRange(nums: number[], target: number): number[] {

   return [nums.indexOf(target),nums.lastIndexOf(target)] 

    
};
console.log(searchRange(nums2,8));


for (var index = 0; index < 5; index++) {
    setTimeout(() => {console.log(`${index}`);
    } )
    
    
}

for (let index = 0; index < 5; index += 2) {
    console.log(index);
    
}


function romanToInt(s: string) {
    
let romanMap = new Map(
    [["I",1],
    ["V",5],
    ["X",10],
    ["L",50],
    ["C",100],
    ["D",500],
    ["M",1000]]);


const splittedRoman : string [] = s.split("");

let sum = 0;



for (let i = 0; i < splittedRoman.length; i++){

    if (romanMap.get(splittedRoman[i]) < romanMap.get(splittedRoman[i + 1]) ) {

        sum -= romanMap.get(splittedRoman[i]);

        continue;
        

    }  else {

        sum += romanMap.get(splittedRoman[i]);

    }


}




return sum

};

let romanString : string = "MCMXCIV";


console.log(romanToInt(romanString));





