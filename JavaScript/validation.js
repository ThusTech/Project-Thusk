// const checkButton = $(".submit");
const inputValue = $("#answer");
const inputForm = $("#answer-form");
const problemTitle = $(".problem-title");

$(".submit").on("click",function(){
    $("#answer-form").hide();
    $(".answer-response").show();
    
    if(problemTitle.text() === "Multiples of 3 or 5"){
        multipleOfThreeOrFive();
    }else if(problemTitle.text() === "Even Fibonacci Numbers"){
        evenFibonacciNumbers();
    }else if(problemTitle.text() === "Largest Prime Factor"){
        largestPrimeFactor();
    }
});


function displayAnswer(answer){
    $("#answer-response").text("Answer is: "+ answer).css("color", "green");
    $(".retry").show();
}

function multipleOfThreeOrFive(){
    let sum = 0;
    let number = inputValue.val();

    for(let i = 0; i < number; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    displayAnswer(sum);
}

function evenFibonacciNumbers(){
    let firstTerm = 1
    let secondTerm = 2

    let fibo = [firstTerm,secondTerm];
    let thirdTerm = firstTerm + secondTerm;

    let number = inputValue.val()

    while (thirdTerm <= number){
        fibo.push(thirdTerm);
        firstTerm = secondTerm;
        secondTerm = thirdTerm;
        thirdTerm = firstTerm + secondTerm;
    }

    console.log(fibo);

  let sum = ( fibo.reduce((acc, curr)=>{
    return (curr % 2 === 0) ? acc + curr : acc;
  }, 0));

  displayAnswer(sum);
}

function largestPrimeFactor(){
    let primeFactor = [];
    let value = inputValue.val();
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

    displayAnswer(largestPrimeNumber);
}