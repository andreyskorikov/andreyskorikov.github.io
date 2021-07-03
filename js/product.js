document.addEventListener("click", function(e) {
    var a = e.target.closest("a[href^='registration']").id;
    var b = document.getElementsByName(a);
    var c = b[0].innerText.split("/")
    
    var n; 
    var t = ~~(Date.now() / 1000)
    if (t >= 1627776000){n = 1;} else {n = 0;}
	
	var trnx = ga.getAll()[0].get('clientId') + "-" + t.toString();
  
    if (a) {
		localStorage.transaction = trnx;
		localStorage.product = a;
        localStorage.price = c[n].trim().split(" ")[0];
		localStorage.currency = c[n].trim().split(" ")[1];
    }
});