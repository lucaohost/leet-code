function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    let lettersMap: Map<string, number> = new Map();
    countLetters(s1, lettersMap);
    countLetters(s2, lettersMap);
    return verifyInterleaving(s3, lettersMap);
};

function countLetters(word: String, lettersMap: Map<string, number>) {
    let letters = word.split("");
    for (let letter of letters) {
        let qtdLetter = lettersMap.get(letter)
        if (qtdLetter == undefined) {
            lettersMap.set(letter, 1);
        } else {
            lettersMap.set(letter, qtdLetter + 1);
        }

    }
}

function verifyInterleaving(s3: string, lettersMap: Map<string, number>): boolean {
    let lettersMapS3: Map<string, number> = new Map();
    let lettersS3 = s3.split("");
    for (let letter of lettersS3) {
        let qtdLetter = lettersMapS3.get(letter);
        if (qtdLetter === undefined) {
            lettersMapS3.set(letter, 1);
            qtdLetter = 1;
        } else {
            lettersMapS3.set(letter, qtdLetter + 1);
        }
        let qtdLetterOriginWord = lettersMap.get(letter);
        if (qtdLetterOriginWord == undefined || qtdLetter > qtdLetterOriginWord) {
            return false;
        }
    }
    return true;
}

console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));