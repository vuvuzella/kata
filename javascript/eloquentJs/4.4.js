/*
 * startsWith() - 4.4.js
 * takes two string arguments
 * returns true of the first argument is the same with the second argument
 * false if otherwise
 *
 */

function startsWith(str_searchIn, str_searchWord) {
    if (str_searchIn.charAt(0) == str_searchWord.charAt(0))
        return true;
    else
        return false
}

console.log(startsWith("wello world", "what is your name"));
