// TASK - F

function findDoublers(word) {
    word = word.toLowerCase();
    let empty_arry = [];
    for ( letter of word) { 
        if (empty_arry.includes(letter)) {
            return true;
        }
        empty_arry.push(letter);
    }
    return false;
}

console.log(findDoublers("Hello"));