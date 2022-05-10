// 1. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
// Test Data :
// console.log(is_string('w3resource'));
console.log("1.Write a JavaScript function to check whether an `input` is a string or not.")
const is_string = (str) => {
    return typeof (str) == 'string';
}
const is_string2 = (str) => {
    return Object.prototype.toString.call(str) == "[object String]";
}
console.log(is_string('w3resource'));
console.log(is_string2('w3resource'));

// 2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false
const is_Blank = (str) => {
    let flag = false;
    if (str.length == 0) {
        flag = true;
    }
    return flag;
}
console.log("2.Write a JavaScript function to check whether a string is blank or not: ")
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// 3. Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
console.log("3. Write a JavaScript function to split a string and convert it into an array of words.");
const string_to_array = (str) => {
    return str.split(" ");
}
console.log(string_to_array("Robin Singh"));
// 4. Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"
console.log("4. Write a JavaScript function to extract a specified number of characters from a string.");
const truncate_string = (str, numOfChar) => {
    return str.slice(0, numOfChar);
}
console.log(truncate_string("Robin Singh", 4));

// 5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
console.log("5. Write a JavaScript function to convert a string in abbreviated form.");
const abbrev_name = (str) => {
    let split_names = str.trim().split(" ");
    let abb_name = split_names[0];
    for (let index = 1; index < split_names.length; index++) {
        abb_name = abb_name + " " + split_names[index].charAt(0);
    }
    return abb_name + ".";
}
console.log(abbrev_name("Robin Singh"));
//  more explain: capitalize
console.log("capitalize string");
const capitalize = (str) => {
    let split_str = str.trim().split(" ");
    for (let index = 0; index < split_str.length; index++) {
        let element = split_str[index];
        split_str[index] = element.charAt(0).toUpperCase() + element.toLowerCase().slice(1);
    }
    return split_str.join(" ");
}
console.log(capitalize("tHis is capItalizE"));

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
console.log("6. Write a JavaScript function to hide email addresses to protect from unauthorized user");
const protect_email = (email) => {
    let split_email = email.split("@");
    let part1 = split_email[0];
    let part2 = "@" + split_email[1];
    let avg = part1.length / 2;
    part1 = part1.substring(0, avg);
    return part1 + "..." + part2;
}
console.log(protect_email("robin_singh@example.com"));
// 7. Write a JavaScript function to parameterize a string. Go to the editor
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"
console.log("7: Write a JavaScript function to parameterize a string.")

const string_parameterize = (str) => {
    return str.trim().toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s/g, "-");
}
console.log(string_parameterize("Robin Singh from USA."));