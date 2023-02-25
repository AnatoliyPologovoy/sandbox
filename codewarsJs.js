//my solutions

/*
Convert PascalCase string into snake_case

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/
function toUnderscore(string) {
    if (string == null) {
        return 'null';
    }
    if (typeof (string) == 'number') {
        return string.toString();
    } else {
        let resultArr = [];
        let word = '';
        for (let i = 0; i < string.length; i++) {
            if (i == 0) {
                word = string[i].toLowerCase();
            } else {
                if (string[i] == string[i].toUpperCase() && i != 0) {
                    if (parseInt(string[i]) !== string[i]) {
                        resultArr.push(word);
                        word = string[i].toLowerCase();
                    }
                }
                if (string[i] == string[i].toLowerCase() && i != string.length - 1) {
                    word += string[i];
                }
                if (i == string.length - 1) {
                    word += string[i];
                    resultArr.push(word);
                }
            }
        }
        return resultArr.join('_');
    }
}

/*
Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let checkStr = str.toLowerCase();
    let amountO = 0;
    let amountX = 0;
    for (let i = 0; i < str.length; i++) {
        if (checkStr[i] == 'o') {
            amountO++
        }
        if (checkStr[i] == 'x') {
            amountX++
        }
    }
    if (amountX == amountO) {
        return true;
    } else {
        return false;
    }
}

/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

 */

function scramble(str1, str2) {
    let charIndex = {};
    for (let i = 0; i < str2.length; i++) {
        let fromIndex = -1;
        if (charIndex.hasOwnProperty(str2[i])) {
            fromIndex = charIndex[str2[i]];
        }
        let newIndex = str1.indexOf(str2[i], (fromIndex + 1));
        if (newIndex >= 0) {
            charIndex[str2[i]] = newIndex;
        }
        else return false;
    }
    return true;
}

/*

Valid string

You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

Task
Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

For example:

dictionary: ["code", "wars"]

s1:         "codewars" =>  true  -> match 'code', 'wars'
s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
One word from the dictionary can be used several times.
 */


var validWord = function(dictionary, word) {
    let remainedWord = word;
    const extraction = (remainedWord, arr) => {
        arr.forEach((value) => {
            let searchIndex = remainedWord.indexOf(value);
            if (searchIndex >= 0) {
                remainedWord = remainedWord.slice(0, searchIndex) + remainedWord.slice(searchIndex + value.length);
            }
        });
        if (arr.some((value) => remainedWord.includes(value))) {
            remainedWord = extraction(remainedWord, dictionary);
        }
        return remainedWord;
    }
    dictionary.sort((a,b) => b.length - a.length);
    remainedWord = extraction(remainedWord, dictionary);
    if (remainedWord.length === 0) return true;
    else {
        dictionary.sort((a,b) => a.length - b.length);
        remainedWord = extraction(word, dictionary);
        if (remainedWord.length === 0) return true;
    }
    return false;
};