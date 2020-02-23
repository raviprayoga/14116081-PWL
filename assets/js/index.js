
    function run() {  
        // request  
        var xmlHttpRequest = new XMLHttpRequest();  
        xmlHttpRequest.open("GET", "https://reqres.in/api/products", true);  
        xmlHttpRequest.onreadystatechange = function () {  
            if (this.readyState == 4 && this.status == 200) {  
                // response  
                //document.getElementById("isiAPI").innerHTML = JSON.parse(this.responseText)
                
                  JSON.parse(this.responseText).data.forEach(element => {
                  document.getElementById("isiAPI").innerHTML += "<tr><td style=\"background-color: "+ element.color+" ;\"></td><td>"+element.name +"</td><td>"+ element.color+"</td><tr>"
                 });
                // end  
            }  
        };  
        xmlHttpRequest.send();  
    }

    run();