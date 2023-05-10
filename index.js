const outputNumber = document.getElementById("outputNumber")
const btn = document.querySelectorAll(".button")
let outputNumberList = [];
let cachedValue = [];
let chosenOperator;

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    console.log(evt)
    return true;
}

function clearOutputWindow() {
    outputNumberList = [];
    outputNumber.innerText = "";
}

function clearCachedValue() {
    cachedValue = [];
    chosenOperator = [];
}

function storeFirstValue() {
    let firstValue = outputNumberList.join('');
    cachedValue.push(firstValue);
    console.log(outputNumber.innerText)
}

function add() {
    storeFirstValue();
    clearOutputWindow();
    chosenOperator = "+"
};

function subtract() {
    storeFirstValue();
    clearOutputWindow();
    chosenOperator = "-"
}

function equals() {
    let secondNumber = outputNumber.innerText
    let result
    if (chosenOperator === "+") {
        result = (+cachedValue) + (+secondNumber)
    } else if (chosenOperator === "-") {
        result = (+cachedValue) - (+secondNumber)
    }
    outputNumberList = [result]
    outputNumber.innerText = result;
    clearCachedValue();
    return
}


const btns = btn.forEach((e) => {
    e.addEventListener("click", () => {
        let newestNumber = e.innerText;
        const numberTest = Number(newestNumber)
        if (numberTest || newestNumber === ".") {
            if (outputNumberList.includes(".") && newestNumber === ".") {
                return
            } else {
                outputNumberList.push(newestNumber);
                outputNumber.innerText = outputNumberList.join('')
            }
        } else {
            return
        }
    })
})

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
    clearOutputWindow();
    clearCachedValue();
})

const additionButton = document.getElementById("additionButton")
additionButton.addEventListener("click", () => {
    add();
})

const subtractionButton = document.getElementById("subtractionButton")
subtractionButton.addEventListener("click", () => {
    subtract();
})

const equalsButton = document.getElementById("equalsButton")
equalsButton.addEventListener("click", () => {
    equals();
})