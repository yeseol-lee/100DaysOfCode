//문제: html에서 받아온 파일이 텍스트인지 모름. tolowercase()함수가 적용안됨. string에만 적용가능. string으로 읽어들이기 하는중...
//receive file from html and display
document.getElementById("input-file").addEventListener("change", handleFiles);

function handleFiles(event) {
    //variable to save entire text
    var text;

    const input = event.target;
    if ('files' in input && input.files.length > 0) {
        placeFileContent(
            document.getElementById('content'),
            input.files[0])
    }

    console.log(input.files[0]);
    
    //write doc stats in html
    getDocStats(text);
}

function placeFileContent(target, file) {
    readFileContent(file).then(content => {

        //make text file's look good
        content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');

        //save content to text For using later.
        text = content;

        target.innerHTML = content;
    }).catch(error => console.log(error))
}

function readFileContent(file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
    })
}



//get DocStats
function getDocStats(fileContent) {

    var docLength = document.getElementById("docLength");
    var wordCount = document.getElementById("wordCount");
    var charCount = document.getElementById("charCount");

    console.log(typeof(fileContent));
    //not working
    /*let text = fileContent.toLowerCase();
    console.log(text);
    let wordArray = text.match(/\b\S+\b/g);
    let wordDictionary = {};

    var uncommonWords = [];
    */
}
