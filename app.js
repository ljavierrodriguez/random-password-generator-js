/* 
uppercases
lowercases
numbers
symbols
size
*/
let passGenerated = [];
const generatePassword = (hasUppercases = false, hasLowercases = true, hasNumbers = false, hasSymbols = false, size = 8) => {
    let password = [];
    let characters = "";

    if (hasUppercases) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasLowercases) characters += "abcdefghijklmnopqrstuvwxyz";
    if (hasNumbers) characters += "0123456789";
    if (hasSymbols) characters += "?*%_$@#.";

    let i = 0;
    while(i < size){
        password.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        i++;
    }
    return password.join('');
}

let pass =  generatePassword(true, true, true, true, 18);
passGenerated.push(pass);
console.log(pass);
console.log(passGenerated);
