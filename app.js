var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#text-input");

var output = document.querySelector("#out");

var Url = "https://api.funtranslations.com/translate/minion.json";
  
function constructorUrl(text){
    return Url + "?" + "text=" + text;
}

function errorHandler(error){
    return console.log("failed to load",error);
}


function clickHandler(){
    // console.log("clicked");
    // console.log("input", textInput.value);
    var input = textInput.value;
    fetch(constructorUrl(input)) 
    .then(response => response.json())
    .then(json => {
        var result = json.contents.translated;
        output.innerHTML = result;
    })
    .catch(errorHandler)
  
};

btnTranslate.addEventListener("click", clickHandler);

