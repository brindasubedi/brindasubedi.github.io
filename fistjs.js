function addValue(givenValueId, totalValueId, elementId){

    var x = parseInt(document.getElementById(givenValueId).value);
    var y  = parseInt(document.getElementById(totalValueId).value);
    
    var percentage = (x/y)*100;
    document.getElementById(elementId).innerHTML = percentage.toFixed(2)+"%";
    
    }
    