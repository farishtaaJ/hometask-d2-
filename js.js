/*// task 1
function longest (arr)
{
    let res = arr.filter(arr => arr.endsWith("man"));
    
    return res.sort();;
}
console.log(longest(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine"]))
*/

// homework 
//task 1 
function mergeArrays (...arr)
{
    let res = []

     arr.forEach(function(arr1) 
    {
        res = res.concat(arr1)
    })

    return res
}
console.log(mergeArrays([1,2,3],[4,5,6]));



// task 2 
function findIndex (arr,num)
{
    let index = arr.indexOf(num)

    if (index != -1)
    {
        return index 
    }
    else 
    {
        return -1
    }
}
console.log(findIndex([3,4,5,3,1,5,5,5,7,6], 5));




// task 3 
function removeDuplicates (arr)
{
    return arr.filter((value, index, num) => 
         num.indexOf(value) === index
    )
}
console.log(removeDuplicates([1,2,2,3,3,4,4]));




//task 4 
function removeNegative (arr)
{
    return arr.filter((arr2) => 
           arr2 >= 0
    )
}
console.log(removeNegative([-1,-2,5,4,-6]));



// task 5 
function calculateAverage (arr)
{
    let sum = arr.reduce((arr1, num) => 
        arr1 + num, 0)

    return sum / arr.length
}
console.log(calculateAverage([2, 4, 6, 8, 10]));




// task 6 
function isPolidromeArray (arr)
{
    let reverce = arr.slice().reverse()

   for (let i = 0; i < arr.length; i++)
   {
        if (arr[i] !== reverce[i])
        {
            return false 
        }
   }
   
   return true 
}
console.log(isPolidromeArray([1,2,3,2,1]));
