const checkButton = document.querySelector(".submit");
const inputValue = document.querySelector("#answer");
const inputForm = document.querySelector("#answer-form");
const display = document.querySelector("#answer-response");
const problemTitle = document.querySelector(".problem-title");

checkButton.onclick = action;

// RemotePlayback.onclick = reset();


function action(){
    $("#answer-form").hide();
    $(".answer-response").show();
    
    if(problemTitle.innerText == "Multiples of 3 or 5"){
        multipleOfThreeOrFive();
    }else if(problemTitle.innerText == "Even Fibonacci Numbers"){
        evenFibonacciNumbers();
    }else if(problemTitle.innerText == "Largest Prime Factor"){
        largestPrimeFactor();
    }

}

function displayAnswer(correct){
    if (correct){
        display.innerText = "Correct Answer";
        $(".correct-response-icon").show();
    }else{
        display.innerText = "Wrong Answer";
        $(".wrong-response-icon").show();
        $(".retry").show();
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

function evenFibonacciNumbers(){
    let firstTerm = 1
    let secondTerm = 2

    let fibo = [firstTerm,secondTerm];
    let thirdTerm = firstTerm + secondTerm;

    let number = document.querySelector("#questionOneRandomTargetValue").innerText;

    while (thirdTerm <= number){
        fibo.push(thirdTerm);
        firstTerm = secondTerm;
        secondTerm = thirdTerm;
        thirdTerm = firstTerm + secondTerm;
    }

  let sum = ( fibo.reduce((acc, curr)=>{
    return (curr % 2 === 0) ? acc + curr : acc;
  }, 0));

  displayAnswer(sum == inputValue.value);
}

function largestPrimeFactor(){
    let primeFactor = [];
    let value = document.querySelector("#questionOneRandomTargetValue").innerText;
    let count = 2;

    while (value/count >= 1){
        if(value % count == 0){
            primeFactor.push(count);
            value = (value / count);
        }else{
            count+=1;
        }
    }

    let largestPrimeNumber = primeFactor.reduce((acc, curr)=>{
        return (curr > acc)  ? curr : acc;
        },primeFactor[0]);

    displayAnswer(largestPrimeNumber == inputValue.value);
}