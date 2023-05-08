const outputNumber = document.getElementById("outputNumber")
const btn = document.querySelectorAll(".button")
let outputNumberList = [];
let cachedValue = [];


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
}

function add() {
    let firstValue = outputNumberList.join('');
    cachedValue.push(firstValue);
    console.log(outputNumber.innerText)
    clearOutputWindow();
    return
};

function equals() {
    let secondNumber = outputNumber.innerText
    let sum = (+cachedValue) + (+secondNumber)
    outputNumberList = [sum]
    outputNumber.innerText = sum;
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

const equalsButton = document.getElementById("equalsButton")
equalsButton.addEventListener("click", () => {
    equals();
})