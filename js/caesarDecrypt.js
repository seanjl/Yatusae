var alphabet = "1qaz2w sx3edc4rfv5tgb6yhn7ujm8ik,9ol.0pñ-_?!";

// var alphabet = " abcdefghijklmnopqrstuvwxyz0123456789!?.,:;'-_";
var fullAlphabet = alphabet + alphabet + alphabet;

function runCipher() {
    var cipherText = $('#cypher').val();
    var cipherOffsetPos = $('#offset').val();
    var cipherOffset = -Math.abs(cipherOffsetPos); // This makes the key negative, solving the cypher
    cipherOffset = (cipherOffset % alphabet.length);
    var cipherFinish = '';

    for (i = 0; i < cipherText.length; i++) {
        var letter = cipherText[i];
        var upper = (letter == letter.toLowerCase());
        letter = letter.toLowerCase();

        var index = alphabet.indexOf(letter);
        if (index == -1) {
            cipherFinish += letter;
        } else {
            index = ((index + cipherOffset) + alphabet.length);
            var nextLetter = fullAlphabet[index];
            if (upper) nextLetter = nextLetter.toLowerCase();
            cipherFinish += nextLetter;
        }
    }

    $('#finish').val(cipherFinish);
}

$(document).ready(function() {
    $('#cypher').keypress(function() {
        setTimeout(function() { runCipher(); }, 20);
    });
    $('#cypher').blur(function() {
        runCipher();
    });
    $('#offset').change(function() {
        setTimeout(runCipher(), 20);
    });

});
