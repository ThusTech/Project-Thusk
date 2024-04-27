const checkButton = document.querySelector(".submit");
const inputValue = document.querySelector("#answer");
const inputForm = document.querySelector("#answer-form");
const display = document.querySelector("#answer-response");
const question = document.querySelector(".question");

checkButton.onclick = action;

function action(){
    let value = inputValue.value;

    //hide input div
    inputForm.classList.replace("show-form","hide-form");
    display.classList.replace("hide-response","show-response");

    if(question.getAttribute("id") === "question-1"){
        multipleOfThreeOrFive(value);
    }else if(question.getAttribute("id") === "question-2"){
        evenFibonacciNumbers(value);
    }else if(question.getAttribute("id") === "question-3"){
        largestPrimeFactor(value);
    }
}

function multipleOfThreeOrFive(data){
    display.innerText = "1";
}

function evenFibonacciNumbers(data){
    display.innerText = "2";
}

function largestPrimeFactor(data){
    display.innerText = "3";
}