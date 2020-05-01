function item(){
    var itemname = document.getElementById("item").value;
    localStorage.setItem("itemName",itemname);

    var quantityname = document.getElementById("quantity").value;
    localStorage.setItem("quantityName",quantityname);

    var ratename = document.getElementById("rate").value;
    localStorage.setItem("rateName",ratename );
    confirm("data is recored sucessfully");

}