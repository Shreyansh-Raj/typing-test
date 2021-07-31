var text = `Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the big four technology companies along with Amazon, Facebook, and Apple. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14% of its publicly-listed shares and control 56% of the stockholder voting power through super-voting stock. The company went public via an initial public offering (IPO) in 2004. In 2015, Google was reorganized as a wholly owned`;
// var correct = ;
function replaceChar(origString, replaceChar, index) {
    let newStringArray = origString.split("");

    newStringArray[index] = replaceChar;

    let newString = newStringArray.join("");

    return newString;
}
document.getElementById('content-text').innerHTML = text;

function click(event) {
    var typedChar = event.data;
    let contentChar = text.charAt(document.getElementById('typed-text').value.length - 1);
    console.log(typedChar, contentChar, typedChar == contentChar);
    if (typedChar == contentChar) {
        // HTMLTextAreaElement.style.backgroundColor = 'red';
        let r = `<span class="correct">${typedChar}</span>`
        replaceChar(text, r, (document.getElementById('typed-text').value.length - 1));
        document.getElementById('content-text').innerHTML = text;

    }
};

document.getElementById('typed-text').addEventListener('input', click);