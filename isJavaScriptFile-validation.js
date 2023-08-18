// // First part ---> endsWith file use kare kara hoese 
// //validation check karbo string or number kina then fileName ar sese .js ase kina 
// // jodi .js thake print karbe true otherwise false. fileName.endWith(.js) use kare
// // validation check kara hoese


// function isJavaScriptFile(filename) {
//     if (typeof filename !== 'string') {
//         return 'Please provide me a valid filename (string)';
//     }else{ 
//         if(filename.toLowerCase().endsWith(".js") === true ) {  // (".js") must be double cottation ar moddhe likhte hobe
//             return true;                                        // toLowerCase die sobgulo k lower case kare nisi
//         }
//         else{
//             return false;
//         }
//     }
// }

// console.log(isJavaScriptFile('hello.Js'));



// 2nd part ---> akhane split and pop ar maddhome last ar extension ber karbo
function isJavaScriptFile(filename) {
    if (typeof filename !== 'string') {
        return 'Please provide me a valid filename (string)';
    }
    else {
        const arr = filename.split(".")     // arr variable declare kar fileName k split kara hoese
        const lastElement = arr.pop();

        //return lastElement.toLowerCase() === "js";     // ai line ar nicher if condition same aita just aktu shortcut
        if (lastElement.toLowerCase() === "js") {
            return true;
        }
        return false;

    }
}

console.log(isJavaScriptFile('helo.bd.naz.jan.hello.js.html'));