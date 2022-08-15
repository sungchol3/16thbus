function load(){
  var result = document.getElementById('result');
  result.innerText = "Change";
  var text = readTextFile('file://docs/Bus_weekday_cw.csv');
}

function readTextFile(file)
{
    $.ajax({
        url: "https://sungchol3.github.io/16thbus/Bus_weekday_cw.csv",
        success: function(csv) {
            const output = Papa.parse(csv, {
              header: true, // Convert rows to Objects using headers as properties
            });
            if (output.data) {
              console.log(output.data);
            } else {
              console.log(output.errors);
            }
        },
        error: function(jqXHR, textStatus, errorThrow){
            console.log(textStatus);
        }
    });
}