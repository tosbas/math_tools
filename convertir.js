// zone de saisis

let zone_de_saisis = document.createElement("div");
zone_de_saisis.setAttribute("id", "zone_de_saisis");

let zone_inline = document.createElement("div");
zone_inline.setAttribute("id","zone_inline");

// input

let envoyer = document.createElement("input");
envoyer.setAttribute("type", "submit");
envoyer.innerText = "Envoyer";

let type_de_valeur = document.createElement("select");
type_de_valeur.setAttribute("class", "options");

let saisis = document.createElement("input");
saisis.setAttribute("id", "saisis_valeur");
saisis.setAttribute("placeholder", "Saisir une somme");

let saisisConv = document.createElement("select");
saisisConv.setAttribute("class", "options");

let texteConv = document.createElement("p");
texteConv.innerText = "Convertion en ";

// texte pour le résultat

let texte = document.createElement("p");
// script

zone_centrale.appendChild(zone_de_saisis);
zone_de_saisis.appendChild(zone_inline);
zone_inline.appendChild(saisis);
zone_inline.appendChild(type_de_valeur);
zone_de_saisis.appendChild(texteConv);
zone_de_saisis.appendChild(saisisConv);
zone_de_saisis.appendChild(envoyer);

let tabConv = [];

let tabOptions = document.getElementsByClassName("options");

for (let i = 0; i < tabOptions.length ; i++)
{
    tabOptions[i].innerHTML = 
    "<option class='secondes' value='1'>secondes</option>"
    + "<option class='minutes' value='2'>minutes</option>"
    + "<option class='heures' value='3'>heures</option>"
    + "<option class='jours' value='4'>jours</option>"

    tabConv.push(tabOptions[i].selectedIndex)

    tabOptions[i].addEventListener("change",function(){

        tabConv[i] = tabOptions[i].selectedIndex;
    })
}

envoyer.addEventListener("click", function(){

    let somme = saisis.value;
    zone_de_saisis.appendChild(texte);
    diviser(somme);
    multiplier(somme);
    saisis.value = "";
    
    if(somme == 0)
    {
        texte.innerText = "Rien à calculer"
    }
    else if(tabConv[0] == tabConv[1])
    {
        texte.innerText = "Le type de valeur doit être différent du type de conversion !"
    }
})

function diviser(element)
{
    let regexp = /\D/g;

    // 0 = secondes, 1 = minutes, 2 = heures, 3 = jours
    if(tabConv[0] == 0 && tabConv[1] == 1)
    {
        texte.innerText = saisis.value + " secondes en minutes = " + Math.round((element / 60) * 100) / 100;
    }
    else if(tabConv[0] == 1 && tabConv[1] == 2)
    {
        texte.innerText = saisis.value + " minutes en heures = " + Math.round((element / 60) * 100) / 100;
    }
    else if(tabConv[0] == 0 && tabConv[1] == 2)
    {
        texte.innerText = saisis.value + " secondes en heures = " + Math.round((element / 3600) * 100) / 100;
    }
    else if(tabConv[0] == 0 && tabConv[1] == 3)
    {
       texte.innerText =  saisis.value + " secondes en  jours = " + Math.round((element / 86400) * 100) / 100;
    }
    else if(tabConv[0] == 1 && tabConv[1] == 3)
    {
       texte.innerText = saisis.value + " minutes en  jours = " + Math.round((element / 1440) * 100) / 100;
    }
    else if(tabConv[0] == 2 && tabConv[1] == 3)
    {
       texte.innerText = saisis.value + " heures en  jours = " + Math.round((element / 24) * 100) / 100;
    }
    else if(regexp.test(element) == true)
    {
        texte.innerText = "erreur";
    }
}

function multiplier(element)
{
    let regexp = /\D/g;

    if(tabConv[0] == 1 && tabConv[1] == 0)
    {
       texte.innerText = saisis.value + " minutes en secondes = " + element * 60;
    }
    else if(tabConv[0] == 2 && tabConv[1] == 1)
    {
        texte.innerText = saisis.value + " heures en minutes = " +  element * 60;
    }
    else if(tabConv[0] == 2 && tabConv[1] == 0)
    {
       texte.innerText = saisis.value + " heures en secondes = " + element * 3600;
    }
    else if(tabConv[0] == 3 && tabConv[1] == 0)
    {
       texte.innerText = saisis.value + " jours en secondes = " + element * 86400;
    }
    else if(tabConv[0] == 3 && tabConv[1] == 1)
    {
       texte.innerText = saisis.value + " jours en minutes = " + element * 1440;
    }
    else if(tabConv[0] == 3 && tabConv[1] == 2)
    {
      texte.innerText = saisis.value + " jours en heures = " + element * 24;
    }
    else if(regexp.test(element) == true)
    {
        texte.innerText = "erreur";
    }
}








