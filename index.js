var initialPrice = document.querySelector("#initial-price")
var quantityStock = document.querySelector("#stocks-qty")
var currentPrice = document.querySelector("#current-price")
var button = document.querySelector(".submit-button")
var finalMessage = document.querySelector(".message")
var htmlBody = document.querySelector(".html-body")

function calcProfit(IP, QS, CP) {
    var profit = (CP * QS) - (IP * QS);
    var profitPercent = (profit * 100) / (IP * QS);
    return [profit.toFixed(2), profitPercent.toFixed(2)]
}

function calcLoss(IP, QS, CP) {
    var loss = (IP * QS) - (CP * QS);
    var lossPercent = (loss * 100) / (IP * QS);
    return [loss.toFixed(2), lossPercent.toFixed(2)]
}

button.addEventListener("click", function calculate() {
    var ipNum = Number(initialPrice.value);
    var qtyStockNum = Number(quantityStock.value);
    var currNum = Number(currentPrice.value);
    if (ipNum > 0 && qtyStockNum > 0 && currNum > -1) {
        if (ipNum < currNum) {
            var resultP = calcProfit(ipNum, qtyStockNum, currNum);
            finalMessage.innerText = `Yayy!! Your gains were ${resultP[0]} and you profited by ${resultP[1]} % 🤑`;
        } else {
            if (ipNum === currNum){
                finalMessage.innerText = "No pain, no gain and No gain, no pain 🤷‍♂️"
            } else {
                var resultL = calcLoss(ipNum, qtyStockNum, currNum);
                finalMessage.innerText = `Aww 🤦‍♂️ You booked losses worth ${resultL[0]} and lost ${resultL[1]} % of your wealth`
            }
        }
    } else {
        finalMessage.innerText = "Please fill out valid amounts."
    }
    if (resultL[1] >= 50) {
        htmlBody.style.background = 'grey';
    } else {
        htmlBody.style.background = 'white';
    }
}
);