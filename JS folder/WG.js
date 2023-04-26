const inputs = document.querySelector(".inputs"),
reset = document.querySelector(".reset"),
Clue = document.querySelector(".inText");
var button = document.createElement("input");
var words;
var whatButton1;
var whatButton2;
var whatButton3;


function randomWord(){
    let ranObj = wordList[Math.floor(Math.random()* wordList.length)];
    let word = ranObj.word;
    console.log("test"+word+"");
    console.log("test"+ranObj.Clue+"");
    Clue.innerText = ranObj.Clue;

    let search="";
    for(let i = 0; i < word.length; i++){
    search += `<input type="text" disabled>`;
   }
   inputs.innerHTML = search;
   console.log(word);
   words = word;
    return word;

}
// randomWord();
     words = randomWord(); 



reset.addEventListener("click", words);

// button.setAttribute("type", "button");
// button.setAttribute("value", wordList1);
// button.setAttribute("wordList1", "MyButton");
// document.body.appendChild("button");
//var target = document.getElementById("target");


function letterCall(){
     let randomChar = wordList1[Math.floor(Math.random()* wordList1.length)];
     let letter = randomChar.letter;
     console.log(randomChar);
    //  target.innerText += wordList1[myWord];
        return randomChar;
     //button.innerText += myWord.button;
}

function button1(){
   // let button1Text = "Button 1 says this"
   whatButton1 = assignRandomButtonVal();
    let btn1 = document.getElementById(whatButton1); //button1
    btn1.innerHTML= splitWords().toUpperCase();
}

function button2(){
    var btn2
    whatButton2 = assignRandomButtonVal();
    if(whatButton1 == "button2" || whatButton1 == "button3"){
        btn2 = document.getElementById("button1");
    }else{
        btn2 = document.getElementById(whatButton2);
    }
     
    btn2.innerHTML=letterCall().toUpperCase();
}

function button3(){
    var btn3
    whatButton3 = assignRandomButtonVal();
    if(whatButton1 == "button3" || whatButton1 == "button1"){
        btn3 = document.getElementById("button2");
    }else{
        btn3 = document.getElementById(whatButton2);
    }
    btn3.innerHTML=letterCall().toUpperCase();
}

function cards(){
    button1();
    button2();
    button3();
}

function splitWords(){
    console.log(words);
    if(words !== undefined){
    let wordArray = words.split('')
    console.log(wordArray)
    let myletter = Math.floor(Math.random()* wordArray.length);
    console.log("testing "+words+"");
     console.log(wordArray[myletter]);

     return wordArray[myletter];
    }
}

function assignRandomButtonVal(){
    var buttons = ["button1", "button2", "button3"];
    let myButtons = Math.floor(Math.random()* buttons.length);
    console.log(buttons[myButtons]);
    return buttons[myButtons]
}


assignRandomButtonVal();

































































// let elm = document.getElementsByClassName("cl");
// for(i=0;i<elm.length;i++){
//     elm[i].innerHTML = "Hello";
// };

// let elm2 = document.getElementById("sec");
// elm2.innerHTML = "Welcome";

// let em= document.getElementsByTagName("p");
// for(i=0;i<em.length;i++){
//     em[i].innerHTML = "Hi";
// };


// let em2 = divElm.getElementsByTagName("h1");
// for(i=0;i<em2.length;i++){
//     em2[i].innerHTML = "BYE";
// }
// let body = document.body;
// let divElement = document.getElementById("div1");
// let h1Elm = document.



// let ListElement = document.getElementById("ulList");
// let li5 = document.createElement("li");
// let list = document.createTextNode("List 5");
// li5.appendChild(list);
// ListElement.appendChild("li5");


// let btn = document.getElementById("btn");
// btn.setAttribute("name", "button1");
// btn.setAttribute("class", "cl1");

// btn.removeAttribute("class");

// console.log(btn.getAttribute("class"));

// console.log(btn.getAttribute("name"));


// btn.style.cssText += "color:blue; background-color:yellow"; 


// classes
// let box = document.getElementById("box");
// console.log(box.className);

// console.log(box.classList);
// for(let css of box.classList){
//     console.log(css);

// }


// remove the dimension class from the div

// box.classList.remove("dimension");
// box.classList.add("dimension");

// replace
// box.classList.replace("color","dimension");

// toggle
function test(){
    let btn = document.getElementsByTagName("para");
    if(btn.style.display === "none"){
        btn.style.display = "block";
            }else{
                btn.style.display = "none";
            }
};

// let btn = document.getElementsByTagName("p");
// console.log(btn);
// btn.className.toggle("p");
