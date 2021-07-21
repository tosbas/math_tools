// zone de saisis

let zone_de_saisis = document.createElement("div");
zone_de_saisis.setAttribute("id", "zone_de_saisis");

// input

let envoyer = document.createElement("input");
envoyer.setAttribute("type", "submit");
envoyer.innerText = "Envoyer";

let saisis_pourcentage = document.createElement("input");
let saisis_somme = document.createElement("input");

saisis_pourcentage.classList.add("saisis");
saisis_somme.classList.add("saisis");

saisis_pourcentage.setAttribute("placeholder","Saisir pourcentage");
saisis_somme.setAttribute("placeholder", "Saisir somme" );


// texte pour le résultat

let texte = document.createElement("p");


zone_centrale.appendChild(zone_de_saisis);
zone_de_saisis.appendChild(saisis_pourcentage);
zone_de_saisis.appendChild(saisis_somme);
zone_de_saisis.appendChild(envoyer);

envoyer.addEventListener("click",function(){

    let regexp = /\D/g;

    zone_de_saisis.appendChild(texte);

    if(regexp.test(saisis_pourcentage.value) == true || regexp.test(saisis_somme.value) == true )
    {
        texte.innerText = "erreur";

        saisis_pourcentage.value = "";
        saisis_somme.value = "";
    }
    else if(saisis_pourcentage.value == "" || saisis_somme.value == "" || saisis_pourcentage.value == "" && saisis_somme.value == "")
    {
        texte.innerText = "Il manque quelque chose !";
    }
    else
    {
        texte.innerText = saisis_pourcentage.value + " % de " + saisis_somme.value + " = " + calcule(saisis_pourcentage,saisis_somme);
                
        saisis_pourcentage.value = "";
        saisis_somme.value = "";
    }

})

texte.remove();

function calcule(element1,element2)           
{
    let opération = element1.value / 100 * element2.value

    return Math.round((opération) * 100 ) / 100 ;           
}
