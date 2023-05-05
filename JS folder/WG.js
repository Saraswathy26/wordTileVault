const reset = document.querySelector(".reset");
var button = document.createElement("input");
let words;
const wrongLetters = [];
let indexValue;

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

    if(!words.includes(letter)){
        wrongLetters.push(letter)
        setWrongLetters(wrongLetters);
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


    if(wrongLetters.length === 7){
        looserEvent();
    }
    generateTileLetters(newStr);
    wrongSelectionCount();
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
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter1="";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * letters.length);
        const randomIndex = Math.floor(Math.random() * 52+2);
        const letter = letters[index];
        var check1;
        var check2;
        if(index == 0){
            check1 = letters[index + 1];
        }else{
            check1 = letters[index - 1];
        }

        if(index === 51){
            check2 = letters[index - 1];
        }else{
            check2 = letters[index + 1];
        }

        const letter1 = check1;
        const letter2 = check2;
        
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
     clearSelecctionCount();
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
    clearWrongLetters(wrongLetters);
    clearSelecctionCount();
    document.querySelector("#play").disabled = true;
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

    function setWrongLetters(whatwrongLetters){
        var wrongWords = document.querySelector(".wrong");
        wrongWords.innerText = ("I'm Wrong - " +whatwrongLetters);
    }

    function clearWrongLetters(whatwrongLetters){
        while(wrongLetters.length > 0) {
            wrongLetters.pop();
        }
        var wrongWords = document.querySelector(".wrong");
        wrongWords.innerText = ("I'm Wrong - " +whatwrongLetters);
    }

    function clearSelecctionCount(){
        var wrongSelectCounts = document.querySelector(".wrongCount");
        wrongSelectCounts.innerText = (" life's left  " + 7);
    }


    function looserEvent(){
        
        let clickEvent = new Event('click');
         document.getElementById('loserModalId').dispatchEvent(clickEvent);
    }

    function wrongSelectionCount(){
            var wrongSelectCount = document.querySelector(".wrongCount");
            let t = wrongLetters.length-7;
            wrongSelectCount.innerText = ("life's left " + t);
            }

        function disabledPlaybtn(){
            document.querySelector("#play").disabled = true;
           cards();
        }

        function play() {
        var buttons = document.getElementById("myAudio");
        // buttons.play();
    button.loop = true;
    button.load();
    
 }

 

    
       

