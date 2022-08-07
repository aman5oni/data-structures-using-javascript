let STRING1 = "HELLO BOY MY NAME IS AMAN SONI";

let STRING2 = "HELLO BROTHER ITS STRING 2";

let Charatt = STRING1.charAt(STRING1.length - 2);
console.log(Charatt);

let CharCodattt = STRING1.charCodeAt(0);
console.log(CharCodattt);

let MergeString = STRING1.concat(" ", STRING2);
console.log(MergeString);

let EndsWith = STRING1.endsWith("SONI");
console.log(EndsWith);

let StartsWith = STRING1.startsWith("HELLO");
console.log(StartsWith);

let text = String.fromCharCode(72, 69, 76, 76, 79);
console.log(text);

let Includes = STRING1.includes("AMAN");
console.log(Includes);

let IndexOf = STRING1.indexOf("AMAN");
console.log(IndexOf);

let LastIndexOf = STRING1.lastIndexOf("AMAN");
console.log(LastIndexOf);

let COMPARE = STRING1.localeCompare(STRING2);
console.log(COMPARE);

let MATCH = STRING1.match(/O/);
console.log(MATCH);

let REPEAT = STRING1.repeat(2)
console.log(REPEAT)

console.log(STRING1)
let REPLACE = STRING1.replace("HELLO","HII")
console.log(STRING1)

console.log(REPLACE)

let SEARCH = STRING1.search(/BOY/i )
console.log(SEARCH)

console.log(STRING1)
let Slice = STRING1.slice(0,5)
console.log(STRING1)

console.log(Slice)

let Split = STRING1.split(" ")
console.log(Split)

let SUBSTR = STRING1.substr(0,5)
console.log(SUBSTR)
console.log(STRING1)

let SUBSTRING = STRING1.substring(0,5)
console.log(SUBSTRING)

let TOLOCATELOWERCASE = STRING1.toLocaleLowerCase()
console.log(STRING1)
console.log(TOLOCATELOWERCASE)

let TOLOCATEUPPERCASE = TOLOCATELOWERCASE.toLocaleUpperCase()
console.log(TOLOCATEUPPERCASE)

let TOLOWERCASE = STRING1.toLowerCase()
console.log(STRING1)
console.log(TOLOWERCASE)

let TOUPPERCASE = TOLOWERCASE.toUpperCase()
console.log(TOUPPERCASE)

let STRINGFORTRIM = "          MNS a Hero Guy           "

let TRIM = STRINGFORTRIM.trim("")
console.log(STRINGFORTRIM)
console.log(TRIM)

let VALUEOF = STRING1.valueOf()
console.log(VALUEOF)
