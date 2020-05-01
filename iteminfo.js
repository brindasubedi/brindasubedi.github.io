function loaditem(){
    var SN = 1;
    var itemRate = localStorage.getItem("rateName")
    var quantity = localStorage.getItem("quantityName")
    document.getElementById("additem").innerHTML="<tr><td>"+SN+"</td><td>"+localStorage.getItem("itemName")+"</td><td>"+quantity+"</td><td>"+itemRate+"</td><td id='"+SN+"'>"+quantity*itemRate+"</td></td></tr>"
    
    
    }