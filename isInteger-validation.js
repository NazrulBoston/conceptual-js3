
// amon akta function declare kara hoese and parameter hisebe number nia hoese
// akhon amra validation karbo j jodi amra number na die string ba onno kisu dei 
// tokhon bolbe please provide a number, ar jodi number dei tahole porer else a jabe and
// oi khane check karbe jodi number ta purno sokkha hoi (number % 1 === 0 ) return karbe 
// true and float/doshomik hole false return karbe

function isInteger(number) {
    if (typeof number !== 'number') {
        return 'Please provide a number'
    } else {
        if (number % 1 === 0) {
            return true;
        } else {
            return false;
        }

    }
}
console.log(isInteger('go'))