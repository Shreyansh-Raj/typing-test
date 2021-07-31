var text = `Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14% of its publicly-listed shares and control 56% of the stockholder voting power through super-voting stock. The company went public via an initial public offering (IPO) in 2004. In 2015, Google was reorganized as a wholly owned`;

const nonEditableTextArray = text.split("");
var textArray = text.split("");
document.getElementById('content-text').innerHTML = text;

function click(event) {
    var typedChar = event.data;
    console.log(event);
    let charIndex = document.getElementById('typed-text').value.length - 1;
    let contentChar = nonEditableTextArray[charIndex];
    let r;
    if (event.inputType == 'insertText') {
        if (typedChar == contentChar) {
            r = `<span class="correct">${nonEditableTextArray[charIndex]}</span>`;
            textArray[charIndex] = r;
            text = textArray.join("");
            document.getElementById('content-text').innerHTML = text;
            console.log("correct", charIndex, typedChar, contentChar);
        } else if (typedChar != contentChar) {
            r = `<span class="wrong">${nonEditableTextArray[charIndex]}</span>`;
            textArray[charIndex] = r;
            text = textArray.join("");
            document.getElementById('content-text').innerHTML = text;
            console.log("wrong", charIndex, typedChar, contentChar);
        }
    } else if (event.inputType == 'deleteContentBackward') {
        r = nonEditableTextArray[charIndex + 1];
        textArray[charIndex + 1] = r;
        text = textArray.join("");
        document.getElementById('content-text').innerHTML = text;
        console.log("wrong", charIndex, typedChar, contentChar);
    }
};

document.getElementById('typed-text').addEventListener('input', click);

// Stoping selecting to input
var inp = document.getElementById('typed-text');

inp.addEventListener('select', function() {
    this.selectionStart = this.selectionEnd;
}, false);