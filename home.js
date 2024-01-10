// Variabili

let km = document.getElementById ("chilometri"); 
let eta = document.getElementById ("eta");
let x = Math.floor((Math.random() * 10) + 1);
let y = Math.floor((Math.random() * 92994) + 1);
let nomeoutput = document.getElementById("nome");

function genera() {
    document.getElementById("outputnome").innerHTML = nomeoutput.value

    if(eta.value < 18){
        document.getElementById("output-offerta").innerHTML = "Sconto minorenni"
        document.getElementById("output-prezzo").innerHTML = [((km.value * 0.21)*80)/100]
    }
    else if(eta.value >= 65){
        document.getElementById("output-offerta").innerHTML = "Sconto per gli over 65"
        document.getElementById("output-prezzo").innerHTML = [((km.value * 0.21)*60)/100]
    }
    else{
        document.getElementById("output-offerta").innerHTML = "Biglietto standard"
        document.getElementById("output-prezzo").innerHTML = (km.value * 0.21)
    }
   
    document.getElementById("output-carrozza").innerHTML = x;
    document.getElementById("output-cp").innerHTML = y;
}
