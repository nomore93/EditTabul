let tabulka;
let vychoziVelikostX = 2;
let vychoziVelikostY = 4;
let aktivniBunka;

function vytvorVychoziTabulku() {                        
	tabulka = document.createElement("table");
	document.body.appendChild(tabulka);
	for (let y = 0; y < vychoziVelikostY; y++) {
		let tr = document.createElement("tr");
		tabulka.appendChild(tr);

		for (let x = 0; x < vychoziVelikostX; x++) {
			tr.appendChild(vytvorBunku());
		}
	}
}


function vytvorInfTabulku() {
	tabulkaInf = document.createElement("tableInf");
	document.body.appendChild(tabulkaInf);
	for (let h = 0; h < 2; h++) {
		let trInf = document.createElement("trInf");
		tabulka.appendChild(trInf);

		for (let g = 0; g < 1; g++) {
			trInf.appendChild(vytvorBunku());
		}
	}
}



function vytvorBunku() {
	let td = document.createElement("td");
	
	let tdInput = document.createElement("input");

	tdInput.type = "text";
	tdInput.onfocus = function () {  /* */
		aktivniBunka = this;
	}
	td.appendChild(tdInput);

	return td;
}

function vytvorTlacitkoAVlozHo(popisek, rodic){
    let btn = document.createElement("button");
    btn.textContent = popisek;
    rodic.appendChild(btn);
    return btn;
}

function vytvorOvladaciTlacitka(){
    vytvorTlacitkoAVlozHo("Pridat",document.body).onclick= pridejRadekDolu;
    vytvorTlacitkoAVlozHo("Odebrat",document.body).onclick= smazRadek;
}

function vytvorRadek(){
    let novyRadek = document.createElement("tr");  
    let prvniRadek = tabulka.firstElementChild;
	let bunkyPrvnihoRadku = prvniRadek.childNodes;
	let pocetBunekVPrvnimRadku = bunkyPrvnihoRadku.length;                                 

    for (let i=0; i<pocetBunekVPrvnimRadku; i++){
        novyRadek.appendChild(vytvorBunku());
    }
    return novyRadek;
}

function pridejRadekDolu() {
	let radek = vytvorRadek();
	let indexVybraneho = indexRadkuAktivniBunky();
	if (tabulka.lastChild == tabulka.childNodes[indexVybraneho]) { /* Vybere z tabulky všech elementů vybraný/aktivní index */
		tabulka.appendChild(radek);
	} else {
		tabulka.insertBefore(radek, tabulka.childNodes[indexVybraneho + 1]);
	}
} 

function smazRadek() {
	let indexVybraneho = indexRadkuAktivniBunky();
	tabulka.removeChild(tabulka.childNodes[indexVybraneho]);
}

function indexRadkuAktivniBunky() {
    let cilHledani = tabulka.childNodes;
    let hledanyPrvek = aktivniBunka.parentElement.parentElement;
    return Array.prototype.indexOf.call(cilHledani, hledanyPrvek);
}

function indexSloupceAktivniBunky() {
	let bunkyVRadku = aktivniBunka.parentElement.parentElement.childNodes;
	let td = aktivniBunka.parentElement;
	return Array.prototype.indexOf.call(bunkyVRadku, td);
}
/*
* table = <TABLE>                                        Table má elementy tr
 * table.firstElementChild = <TR>                        element tr
 * table.firstElementChild.childNodes = [<TD>]           všechny elementy td
 * table.firstElementChild.childNodes.length = number  - počet buněk prvního řádku tabulky
 *
*/

window.onload = function () {
    vytvorOvladaciTlacitka();
	vytvorVychoziTabulku();
}




