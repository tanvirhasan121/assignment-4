/** problem-1
 *  Need to multiply with input number by 3, then add 10, then divide by 2, then subtract 5, and return the output.
 */
function mindGame (number){
    let goon = 3*number;
    let joog = goon + 10;
    let vaag = joog / 2;
    let biyog = vaag - 5;
    return biyog;
}
/**problem-2 
 * The output should be given based on the total number of characters in the String. Output will be 'even' or 'odd'. Sample Input & Output:
*/
function evenOdd (mystring){
    const result = (mystring.length % 2  == 0) ? "even" : "odd";
    return result;
}
/**problem-3 
 * Find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input.
*/
function isLGSeven (mynumber){
    let number = mynumber-7;
    if(number > 7){
        return mynumber*2;  
    }
    else{
        return number;       
    }    
}
/**problem-4 
 * How many bad data(negative number) are there in the array and must return that number.
*/
function findingBadData (arr){
    let count = 0;
    for ( let i = 0; i <  arr.length; i++){
        if (arr[i] < 0){
            count ++;
        }
    }
    return count;
}
/**problem-5
 * Have to figure out how many diamonds  will get in total by combining the gems of all friends. If the number of total diamond is over 1000, then  will get as many diamonds as are left by subtracting 2000 from the total diamond.
*/
function gemsToDiamond (firstFgems,secondFgems,thirdFgems){
    firstFdiamond = 21* firstFgems;
    secondFdiamond = 32* secondFgems;
    thirdFdiamond = 43* thirdFgems;
    totalDiamond = firstFdiamond+secondFdiamond+thirdFdiamond;
    if(totalDiamond  >1000*2){
          let getDiamond = totalDiamond-2000;
          return getDiamond;
    }
    else{
       return totalDiamond;
    }
}