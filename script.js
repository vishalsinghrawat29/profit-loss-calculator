var intialPrice = document.querySelector("#intial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(intial, quantity, current){
    if(intial>current){
        // loss logic here
        var loss = (intial - current)*quantity;
        var lossPercentage = (loss/(intial*quantity))*100;
        showOutput(`Hey, the loss is ${loss.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}%`);
        outputBox.style.color = '#FF395E';
    }else if(current > intial){
        // profit logic here
        var profit = (current - intial)*quantity;
        var profitPercentage = (profit/(intial*quantity))*100;
        showOutput(`Hey, the profit is ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}%`);
        outputBox.style.color = '#0FC28B';0
    }else{
        // the rest of the logic
        showOutput(`No pain no gain and no gain no pain`) ;
        outputBox.style.color = "#0470DE";
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}

function submitHandler(){
    var ip = Number(intialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if((intialPrice.value && stocksQuantity.value && currentPrice.value) === ""){
        // the rest of the logic
        showOutput(`Please fill all the values`) ;
        outputBox.style.color = "#0470DE";
    }else if (ip>=0 && qty> 0 && curr>= 0) {
        calculateProfitAndLoss(ip,qty,curr);
    } else {
          alert("Please enter valid value");
    }
}

submitBtn.addEventListener("click", submitHandler);
