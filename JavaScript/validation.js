const checkButton = document.querySelector(".submit");
const inputValue = document.querySelector("#answer");
const inputForm = document.querySelector("#answer-form");
const display = document.querySelector("#answer-response");
const question = document.querySelector(".question");

checkButton.onclick = action;

function action(){
    //hide input div
    inputForm.classList.add("hide-form");
    display.classList.replace("hide-response","show-response");

    if(question.getAttribute("id") === "question-1"){
        multipleOfThreeOrFive();
    }else if(question.getAttribute("id") === "question-2"){
        evenFibonacciNumbers();
    }else if(question.getAttribute("id") === "question-3"){
        largestPrimeFactor();
    }
}

function displayAnswer(correct){
    if (correct){
        display.innerText = "Correct Answer";
    }else{
        display.innerText = "Wrong Answer";
    }
}

function multipleOfThreeOrFive(){
    let sum = 0;
    let number = document.querySelector("#questionOneRandomTargetValue").innerText;

    for(let i = 0; i < number; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    console.log(sum);
    displayAnswer(sum == inputValue.value);
}

function evenFibonacciNumbers(data){
    // if (false){
    //     display.innerText = "Correct Answer";
    // }else{
    //     display.innerText = "Wrong Answer";
    // }
}

function largestPrimeFactor(data){
    // if (false){
    //     display.innerText = "Correct Answer";
    // }else{
    //     display.innerText = "Wrong Answer";
    // }
}