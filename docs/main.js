function load(){
  var result = document.querySelector("#result");
  var reader = new FileReader();
  let text = "";
  reader.onload = () => {
      text = readTextFile('file://docs/Bus_weekday_cw.csv');
      result.innerHTML = "Change";
      alert(result);
  };
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}