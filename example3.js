var cauhoi = [];


// var btn = document.getElementById("handBtn");
// console.log(btn);
// btn.addEventListener("click", 
// textAdd
// );

function clickBnt(){
   
    var cau1 = document.getElementById("text").value;
    
    cauhoi.push(cau1);
    
    var content = "";
    for (var i=0 ; i<cauhoi.length ; i++){
        content = content+` <tr>
                <td>${cauhoi[i]}</td>
               
            </tr>`
        
    };
    var table = document.getElementById("tbody");
    table.innerHTML= content;
}