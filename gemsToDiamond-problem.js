/**
 convert gems to diamond. 
 gemsToDiamond() namer akta function nia hobe and 3 ta number input hobe ( 3 bondhur
    gems ar songkha hobe)
1st bondhur gems ar power 21
2nd bondhur gems ar power 32
3rd bondhur gems ar power 43
gems power means how many diamond you can convert . 3 bondhur milie koto gulo diamond
pabe setaa ber korte hobe. total diamond ar songkha jodi 1000 ar digun hoi, sekhetre total diamond theke
 2000 bad die jotogulo diamond thakbe totogula tumra pabe.

 Sample Input & OutPut
 Input: 1,1,1
 output: 96
 Input: 20, 200, 50
 Output: 6970
 input : 100, 5, 1
 output: 303  
 */

 function gemsToDiamond(x,y,z){
    if( typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
       return ' please provide me valid number'
    }else if (x < 0 || y < 0 || z < 0 ){
        return 'Please provide me all positive number'
}else{
    const frnd1 = 21;
    const frnd2 = 32;
    const frnd3 = 43;
    
    const total = (x * frnd1) + (y * frnd2) + (z * frnd3);
    if(total > 2000){
        return total - 2000;
    }else{
        return total;
    }
}

 }

console.log(gemsToDiamond(20, 200, 50))