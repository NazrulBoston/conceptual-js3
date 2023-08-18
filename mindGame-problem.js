/*  First step ---> if elseif die kara hoese
akta function creat karte hobe mindGame name. input hisebe akta positive number thakbe
Task: sei number ar sathe 3 gun karte hobe, tarpor 10 jog karte hobe, tarpor 2 die 
vag kare, tarpor 5 biog kore ja output asbe ta return hobe

input --- 5
output -- 7.5
*/


function mindGame(num) {
    if (typeof num !== "number") {                       // prothome check karbo aita number kina, number hole poreer else if jabe
        return "Please provide a number";
    }
    else if (num <= 0) {                                 // akhane bola hosse j num jodi 0 and 0 ar theke soto hoi
        return "Please provide a positive number"
    }
    else{
        const result = (((num*3)+10)/2)-5;               // akhane num ar sathe comdition moto gun jog vag biog kara hoese and 
        return result;                                    //value result namer variable store kara hoese
    }
}

console.log(mindGame(5))





// // akhane ||  die kara hoese not elseif 
// function mindGame(num) {
//     if (typeof num !== "number" || num <= 0) {            // prothome check karbo aita number kina then || or die check karbe num 0 and 0 ar theke soto kina
//         return "Please provide a positive number";
//     }
                                                     
//     else{
//         const result = (((num*3)+10)/2)-5;               // akhane num ar sathe comdition moto gun jog vag biog kara hoese and 
//         return result;                                    //value result namer variable store kara hoese
//     }
// }

// console.log(mindGame("hello"))