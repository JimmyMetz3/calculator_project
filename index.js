const outputNumber = document.getElementById("outputNumber")
const btn = document.querySelectorAll(".button")
let outputNumberList = [];
let firstNumber = [];
let chosenOperator;
let secondNumber;
let result;

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 190) {
        console.log(evt.which)
        return evt.key;
    }
    if (charCode != 46 && charCode > 31
        && (charCode < 47 || charCode > 57))
        return false;
    if (charCode < 47) {
        return false;
    }
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
    firstNumber = [];
    // chosenOperator = [];
}

function mrc() {
    clearOutputWindow();
    clearCachedValue();
    result = 0;
    chosenOperator = [];
    secondNumber = 0;
}

function clearButton() {
    clearOutputWindow();
    clearCachedValue();
}

function storeFirstValue() {
    if (result === 0) {
        let firstValue = outputNumberList.join('');
        firstNumber.push(firstValue);
        console.log(outputNumber.innerText)
    }
    else {

    }
}

function add() {
    checkForExistingOperator();
    storeFirstValue();
    // secondNumber = outputNumber.innerText
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
    let result = (+firstNumber) / 100;
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
    secondNumber = outputNumber.innerText
    // let result
    if (chosenOperator === "+") {
        result = (+firstNumber) + (+secondNumber);
    } else if (chosenOperator === "-") {
        result = (+firstNumber) - (+secondNumber);
    } else if (chosenOperator === "*") {
        result = (+firstNumber) * (+secondNumber);
    } else if (chosenOperator === "/") {
        if (secondNumber === "0") {
            outputNumber.innerText = "Cut that out"
            return
        } else {
            result = (+firstNumber) / (+secondNumber);
        }

    }
    outputNumberList = [result];
    outputNumber.innerText = result;
    firstNumber = result; // changing the first value to the result
    // clearCachedValue();
    return
}

function checkForExistingOperator() {
    if (chosenOperator === "+") {
        equals()
        chosenOperator = "";
        outputNumber.innerText = result;
        // firstNumber = result;

    }
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


