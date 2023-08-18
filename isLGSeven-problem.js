/*
akta function kara hobe isLGSeven and input nea hobe akta number
input ar value and 7 ar moddhe different ber karte hobe. differnet jodi 
7 ar chea soto hoi tahole return karte hobe ar jodi 7 ar chea boro hoi tahole 
sei number ar 2 gun output dibe


input : 6
output: -1
input: -15
output: -22
input : 15
output :30

*/

function isLGSeven(num) {
    if (typeof num !== "number") {
        return "Please provide me a number"
    } else {
        const differ = num - 7;
        if (differ < 7) {
            return differ;
        } else {
            return num * 2;
        }
    }
}

console.log(isLGSeven(10)) 