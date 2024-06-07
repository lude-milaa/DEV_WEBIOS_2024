// getElementById
// innerText > Insere um novo texto
let primeiroTítulo = document.getElementById(primeiroTitulo);

primeiroTitulo.style.color = 'blue';  // serve para mudar a cor de texto
primeiroTitulo.innerText = 'Hello!'   // innerText > Insere um novo texto

// getElement

let pegaClasse = document.getElementsByClassName('getClass');

// pegaClasse[1,1].style.color = 'red';

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'red';
}

console.log(pegaClasse);

console.clear()

//getElementByName
let byName = document.getElementsByName("filho");

console.log(byName)

byName.forEach(funcao)

// 90, 60, 50
// primeiro paramentro é referente aos valores do meu array
// segundo paramentro referente ao indice 
function funcao (cont, indice){
    return byName[indice].style.color = 'brown'
}

console.clear()
 
// getElementByTagName
let byTagName = document.getElementsByTagName("p")

for(c = 0; c < byTagName.length; c++){
    byTagName [c].style.color = '#FF4500'
    byTagName[c].style.fontSize = '30px'
    byTagName[c].style.boxShadow = '5px 2px 5px #000000'
    if(c % 2) byTagName[c].style.backgroundColor = '#fff'
}

let removendo = document.getElementById('remove1')
removendo.remove()
byTagName[1].remove()

console.log(byTagName)

let recebeLista = document.getElementById('paiLista')

recebeLista.style.listStyle = 'none'  // retira a bolinha da listagem 