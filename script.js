function func() {
    let h = document.getElementById("hOne").textContent;  
    let t = document.getElementById("name").value + ' ' + document.getElementById("info").value;
    document.getElementById("hTree").textContent = h; 
    document.getElementById("mytext").textContent = t;  
    document.getElementById("result").style.display = "block";
}

function newfunc() {
    document.getElementById("result").style.display = "none";  
}
