var intialPrice = document.querySelector("#intial-price");
var stocksQuantity = document.querySelector("#stocks-qunatity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(intial, qunatity, current){
    if(intial>current){
        // loss logic here
        var loss = (intial - current)*qunatity;
        var lossPercentage = (loss/intial)*100;
        showOutput(`Hey, the loss is ${loss.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}%`);
        outputBox.style.color = 'Red';
    }else if(current > intial){
        // profit logic here
        var profit = (current - intial)*qunatity;
        var profitPercentage = (profit/intial)*100;
        showOutput(`Hey, the profit is ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}%`);
        outputBox.style.color = 'Green';
    }else{
        // the rest of the logic
        showOutput(`No pain no gain and no gain no pain`) ;
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}

function submitHandler(){
    var ip = Number(intialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr);
}

submitBtn.addEventListener("click", submitHandler);
