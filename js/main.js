function close() {
    document.getElementById("ticket").style.display = "none";
    console.log("close")
}

var cl = document.getElementById("close");
      cl.addEventListener("click", function (e) {
        e.preventDefault(); 
        close();
      });


function buy() {
    document.getElementById("ticket").style.display = "block";
    console.log("open")
}

var op = document.getElementById("bt");
var op2 = document.getElementById("bt2");
var op3 = document.getElementById("bt3");
 op.addEventListener("click", function (e) {
     e.preventDefault();
     buy();
 })

 op2.addEventListener("click", function (e) {
    e.preventDefault();
    buy();
})
op3.addEventListener("click", function (e) {
    e.preventDefault();
    buy();
})
