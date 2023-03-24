/* Cool things will be coded here by my developers */

/**
 * Compare two lowercase strings
 * @param {string} str1
 * @param {string} str2
 * @returns {bool} true if same and lowercase, false if different or contains uppercase
 */
function stringComparison(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    } 
    for(let i = 0; i < str1.length; i++) {
        if(str1.charAt(i) == str1.charAt(i).toUpperCase) {
            return false;
        }
        if(str2.charAt(i) == str2.charAt(i).toUpperCase) {
            return false;
        }
        if(str1.charAt(i) != str2.charAt(i)) {
            return false;
        }
    }
    return true;
}

/**
 * Capitalizes first letter of a string
 * @param {string} str
 * @returns {string} first letter capitalized string
 */
function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}
