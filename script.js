let counter = 9999; // Default counter limit set to 4 digits

const DISPLAY = document.getElementById('display');
const ALERT_EL = document.getElementById('alert');
const ERROR_MSG_OUT_OF_MEMORY = 'Out of memory'; 
const ERROR_MSG_INVALID_RANGE = 'Zero is the low limit';

// Function to display
function updateDisplay(){
    const spanElements = DISPLAY.children;
    let numberToString = counter.toString();
    addPaddingAtStart(0,0,5);
    for(let i = 0; i < numberToString.length; i++) {
        spanElements.item(i).innerText = numberToString[i];
    }
}

// Function to increment number
function increment(){
    const boxCount = DISPLAY.children.length;
    counter++;
    if(counter.toString().length === 5 && boxCount === 4) {
        addBox();
    } else if(counter.toString().length === 6 && boxCount === 5) {
        addBox();
    }else if(counter.toString().length > 6) {
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY;
        return;
    }
    ALERT_EL.innerText = '';
    
    updateDisplay();
}

// Function to add box after a limit
function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}

// Function to increment number
function decrement(){
    if(counter === 0) {
        ALERT_EL.innerText = ERROR_MSG_INVALID_RANGE;
        return
    };
    counter--;
    updateDisplay();
}

// Function to reset number
function reset(){
    counter =0;
    updateDisplay();
}

// Function to add padding at the start of a string
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if(remainingSpace > 0) {
        let newString = originalString;
        for(let i=0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}

updateDisplay();