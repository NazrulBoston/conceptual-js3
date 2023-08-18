/*
 function banate hobe findingBadData and ar input hisebe akat array nibo. array ar moddhe 
 negative number o positive number both thakbe, jesob number jodi negative hoi tahole sei
 number k amra badData bolbo r positive number ke goodData bolbo

Task: array te kotogulo badData ase khuje ber karte hobe then return karte hobe
Sample input and output
Input: [1,2,3]
output: 0
Input: [ 2, -5, -7, -13]
 */

function findingBadData(arr){
 if(!Array.isArray(arr)){
    return "Please provide me a array of  number"
 }
 else{
    let badData = 0;                            // kotogulo badData songkha chiase ar jonno initial value nie nilam 
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "number"){              // let badData = 0;
            return "Please provide me an array of number"
        }else{
            if(arr[i] < 0){                     // arr ar index jodi 0 ar theke soto hoi tahole ata hobe badData
                badData++;                      // tarpor  badData++ kare dilam
            }
        }
    }         
    return badData;                          

 }

}

const array = [ 2, -5, -7, -13]
const myArray = findingBadData(array)
console.log(myArray)
