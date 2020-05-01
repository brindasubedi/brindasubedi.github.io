function load(){
document.getElementById("customerName").innerHTML= localStorage.getItem("Cname");

document.getElementById("customerAddress").innerHTML= localStorage.getItem("Aname");
document.getElementById("customerPhone").innerHTML= localStorage.getItem("Pname");
loaditem();
amount();
}