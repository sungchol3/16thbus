function load(){
  var result = document.getElementById('result');
  result.innerText = "Change";
  var text = readTextFile('file://docs/Bus_weekday_cw.csv');
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
                return allText;
            }
        }
    }
    rawFile.send(null);
}