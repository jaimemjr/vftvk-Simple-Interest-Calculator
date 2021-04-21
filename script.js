function compute() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) { // zero or negative
        alert("Enter with a positive number:");
        document.getElementById("principal").focus();
    } else {
        var valueRate = document.getElementById("rate").value;
        var numberOfYears = document.getElementById("years").value;
        var valueOfInterest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML = `If you deposit <span class="highlight">${principal}</span>,<br />at an interest rate of <span class="highlight">${rate}%</span>.<br />You will receive an amount of <span class="highlight">${interest}</span>,<br />in the year <span class="highlight">${year}</span>`;
    }
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
function clearResult() {
    document.getElementById("result").innerHTML = "";
}  
