const reset = document.querySelector(".reset");
var button = document.createElement("input");
let words;

function checkLetter(test) {
    var letter = document.getElementById('button' + test).innerHTML.toLowerCase();

    if (words.includes(letter)) {
        for (let i = 0; i < words.length; i++) {
            if (document.getElementById('letter_' + i).className === 'right') {
                continue;
            }
            if (letter === words.charAt(i)) {
                var rightChoice = document.getElementById('letter_' + i);
                rightChoice.classList.add('right');
                rightChoice.value = letter.toUpperCase();
                break;
            }
        }
    }

    let positionsToRemove = [];

    for (let i = 0, j=0; i < words.length; i++) {
        if (document.getElementById('letter_' + i).className === 'right') {
            j++;
            positionsToRemove.push(i);
            if(words.length === j){
                winner();
            }
        }
    }

    let newStr = [];

    for (let i = 0; i < words.length; i++) {
        if (!positionsToRemove.includes(i)) {
            newStr.push(words[i]);
        }
    }
    generateTileLetters(newStr);
}

function generateTileLetters(providedLetters = undefined){
    if(providedLetters === undefined){
        words = providedLetters = randomWord();
    }
    const input1 = document.getElementById("button1");
    const input2 = document.getElementById("button2");
    const input3 = document.getElementById("button3");

    const letterIndex = Math.floor(Math.random() * providedLetters.length);
    const specificLetter = providedLetters[letterIndex];

    let randomLetters1 = "";
    let randomLetters2 = "";
    let randomLetters3 = "";
    const length = 1;
    const letters = "abcdefghijklmnopqrstuvwxyz";
    

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * letters.length);
        const letter = letters[index];
        const letter1 = letters[index - 1];
        const letter2 = letters[index + 1];
        randomLetters1 += letter;
        randomLetters2 += letter1;
        randomLetters3 += letter2;
    }

    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        input1.innerHTML = specificLetter.toUpperCase();
        input2.innerHTML = randomLetters2.toUpperCase();
        input3.innerHTML = randomLetters3.toUpperCase();
    } else if (randomIndex === 1) {
        input1.innerHTML = randomLetters1.toUpperCase();
        input2.innerHTML = specificLetter.toUpperCase();
        input3.innerHTML = randomLetters3.toUpperCase();
    } else {
        input1.innerHTML = randomLetters1.toUpperCase();
        input2.innerHTML = randomLetters2.toUpperCase();
        input3.innerHTML = specificLetter.toUpperCase();
    }

}

function winner()
{
    let clickEvent = new Event('click');
    document.getElementById('winnerModalId').dispatchEvent(clickEvent);
}
function randomWord() {
    var hintText = document.querySelector(".hint-text span"),
        inputs = document.querySelector(".inputs");
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word;
    hintText.innerText = ranObj.Clue;

    let search = "";
    for (let i = 0; i < word.length; i++) {
        search += `<input type="text" id="letter_` + i + `" disabled>`;
    }
    inputs.innerHTML = search;
    return word;

}

function cards(word = undefined) {
    generateTileLetters(word);
}
cards();

function sound(){
    let music = document.getElementById("song");
    if(music.pause() == true){
        music.play()
    }else{
        music.pause()
    }
    }
