function amount(){
    var sn = 1;
    var subTotal = parseFloat(document.getElementById(sn).textContent);
    var serviceCharge = ((10/100)*subTotal).toFixed(2);
    var vat =( (13/100)*subTotal).toFixed(2);
    var total = parseFloat(subTotal )+parseFloat( serviceCharge) +parseFloat( vat);
    document.getElementById("subTotal").innerHTML = subTotal;
    document.getElementById("vat").innerHTML=vat;
    document.getElementById("serviceCharge").innerHTML = serviceCharge;
    document.getElementById("total").innerHTML = total;
}