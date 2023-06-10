const outputNumber = document.getElementById("outputNumber")
const btn = document.querySelectorAll(".button")
let outputNumberList = [];
let cachedValue = [];
let chosenOperator;

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 190) {
        console.log(evt.which)
        return evt.key;
    }
    if (charCode != 46 && charCode > 31
        && (charCode < 47 || charCode > 57))
        return false;
    console.log(evt.which)
    return evt.key;
}

function keySelectionHighlight(button) {
    console.log(button)
    button.classList.add("highlight")
    setTimeout(() => {
        button.classList.remove("highlight")
    }, 100)
}

function clearOutputWindow() {
    outputNumberList = [];
    outputNumber.innerText = "";
}

function clearCachedValue() {
    cachedValue = [];
    chosenOperator = [];
}

function clearButton() {
    clearOutputWindow();
    clearCachedValue();
}

function storeFirstValue() {
    let firstValue = outputNumberList.join('');
    cachedValue.push(firstValue);
    console.log(outputNumber.innerText)
}

function add() {
    storeFirstValue();
    clearOutputWindow();
    chosenOperator = "+";
};

function subtract() {
    storeFirstValue();
    clearOutputWindow();
    chosenOperator = "-";
}

function multiply() {
    storeFirstValue();
    clearOutputWindow();
    chosenOperator = "*";
}

function divide() {
    storeFirstValue();
    clearOutputWindow();
    chosenOperator = "/";
}

function percent() {
    storeFirstValue();
    clearOutputWindow();
    let result = (+cachedValue) / 100;
    outputNumberList = [result];
    outputNumber.innerText = result;
    clearCachedValue();
}

function PosNegValue() {
    if (outputNumberList.includes("-")) {
        outputNumberList.shift();
    } else if (!outputNumberList.includes("-")) {
        outputNumberList.unshift("-");
    }
    outputNumber.innerText = outputNumberList.join('');
}

function squareRoot() {
    let sqrtNum = outputNumberList.join('');
    let result = Math.sqrt(sqrtNum);
    outputNumber.innerText = result;
}

function equals() {
    let secondNumber = outputNumber.innerText
    let result
    if (chosenOperator === "+") {
        result = (+cachedValue) + (+secondNumber);
    } else if (chosenOperator === "-") {
        result = (+cachedValue) - (+secondNumber);
    } else if (chosenOperator === "*") {
        result = (+cachedValue) * (+secondNumber);
    } else if (chosenOperator) {
        result = (+cachedValue) / (+secondNumber);
    }
    outputNumberList = [result];
    outputNumber.innerText = result;
    clearCachedValue();
    return
}

const btns = btn.forEach((e) => {
    e.addEventListener("click", () => {
        keySelectionHighlight(e)
        let newestNumber = e.innerText;
        const numberTest = Number(newestNumber)
        if (numberTest || newestNumber === "." || newestNumber === "0") {
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

document.addEventListener("keydown", (e) => {
    let number = isNumberKey(e)
    console.log(`${e.key} was pressed ${e.code}`)
    // console.log(number)
    if (number === "." || number) {
        if (outputNumberList.includes(".") && number === ".") {
            return
        } else {
            console.log(number)
            outputNumberList.push(number);
            outputNumber.innerText = outputNumberList.join('')
        }
    } else {
        return
    }
})


