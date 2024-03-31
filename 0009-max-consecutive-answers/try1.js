/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    if (answerKey.length == 1) {
        return 1;
    }
    let letters = answerKey.split("");
    let bestSeq = findBestSeq(letters);
    let diffLetter = bestSeq.letter === "F" ? "T" : "F";
    while (k !== 0) {
        let walkedAhead = 0;
        for (let i = bestSeq.end + 1; i < letters.length; i++) {
            let letter = letters[i];
            if (letter === bestSeq.letter) {
                walkedAhead++;
            } else {
                walkedAhead = 1;
                break;
            }
        }
        let walkedBack = 0;
        for (let i = bestSeq.init - 1; i >= 0; i--) {
            let letter = letters[i];
            if (letter === bestSeq.letter) {
                walkedBack++;
            } else {
                walkedAhead = 1;
                break;
            }
        }
        if (walkedAhead >= walkedBack) {
            bestSeq.end += walkedAhead;
            letters[bestSeq.end] = bestSeq.letter;
        } else {
            bestSeq.init -= walkedBack;
            letters[bestSeq.init] = bestSeq.letter;
        }
        k--;
    }
    return findBestSeq(letters).qty;
};

function findBestSeq(letters) {
    let bestSequence = { letter: letters[0], init: 0, end: 1, qty: 1 };
    let qtyCandidate = 1;
    for (let i = 1; i < letters.length; i++) {
        let letter = letters[i];
        let previousLetter = letters[i - 1];
        if (letter === previousLetter) {
            qtyCandidate++;
        } else {
            qtyCandidate = 1;
        }
        if (qtyCandidate > bestSequence.qty) {
            let init = i + 1 - qtyCandidate;
            bestSequence = { letter: letter, init: init, end: i, qty: qtyCandidate };
        }
    }
    return bestSequence;
}

console.log(maxConsecutiveAnswers("TTFTTTTTFT", 1));