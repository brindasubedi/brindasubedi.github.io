//function submitDetail(){

    
    //localStorage.setItem("date", receiveValues("date"));
    //localStorage.setItem("invoiceNumber", receiveString("invoiceNumber"));
    //localStorage.setItem("CustomerId", receiveValues("customerId"));
    //localStorage.setItem("customerName", receiveValues("name"));
    //localStorage.setItem("customerAddress", receiveString("address"));
    //localStorage.setItem("customerPhone", receiveString("number"));

    
    

//}


function invoice(){
    var Customername = document.getElementById("name").value;
    localStorage.setItem("Cname",Customername);

    var Addressname = document.getElementById("address").value;
    localStorage.setItem("Aname",Addressname);

    var phonenumber = document.getElementById("number").value;
    localStorage.setItem("Pname",phonenumber);

   

}