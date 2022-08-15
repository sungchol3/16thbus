function load(){
  var result = document.getElementById('result');
  result.innerText = "Change";
  var text = readTextFile('file://docs/Bus_weekday_cw.csv');
}

function readTextFile(file)
{
    $.ajax({
        url: 'https://sungchol3.github.io/16thbus/Bus_weekday_cw.csv',
        dataType: 'text',
    }).done(successFunction);
}

function successFunction(data) {
    var array = $.csv.toArrays(data);
    alert(array);
}