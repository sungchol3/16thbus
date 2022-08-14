function load(){
  var result = document.querySelector("#result");
  var reader = new FileReader();
  let text = "";
  reader.onload = () => {
      text = getText('Bus_weekday_cw.csv');
      result.innerHTML = text;
  };
}

function getText(url){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}