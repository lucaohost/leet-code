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
    let triesFoward = k;
    let letters1 = [...letters];
    let letters1Loop = false;
    for (let i = bestSeq.end; i < letters1.length; i++) {
        if (triesFoward === 0) {
            break;
        }
        if (letters1[i] !== bestSeq.letter) {
            letters1[i] = bestSeq.letter;
            triesFoward--;
        }
        if (i === letters1.length - 1 && triesFoward > 0 && letters1Loop === false) {
            letters1Loop = true;
            i = -1;
        }
    }
    let triesBackward = k;
    let letters2 = [...letters];
    let letters2Loop = false;
    for (let i = bestSeq.init; i >= 0; i--) {
        if (triesBackward === 0) {
            break;
        }
        if (letters2[i] !== bestSeq.letter) {
            letters2[i] = bestSeq.letter;
            triesBackward--;
        }
        if (i === 0 && triesBackward > 0  && letters2Loop === false) {
            letters2Loop = true;
            i = letters2.length;
        }
    }
    let try1 = findBestSeq(letters1).qty;
    let try2 = findBestSeq(letters2).qty;
    return try1 > try2 ? try1 : try2;
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

// console.log(maxConsecutiveAnswers("TTFTTTTTFT", 2) == 10);
// console.log(maxConsecutiveAnswers("TTFTTTTTFT", 1) == 8);
// console.log(maxConsecutiveAnswers("TF", 1) == 2);
console.log(maxConsecutiveAnswers("FFFTTFTTFT", 3) == 8);