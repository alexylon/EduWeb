let name1 = "Alexander Alexandrov";
let name2 = "Ilko Kacharov";
let name3 = "Ekaterina Alexandrova";
let str = /Alexandrov/;

console.log(str.test(name1)); // -> true
console.log(str.test(name2)); // -> false
console.log(str.test(name3)); // -> true

console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

/*
\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
*/
