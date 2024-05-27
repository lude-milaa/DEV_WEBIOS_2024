//Array Unidimensional

let arrayuni = ["HTML", 1993,"CSS", 1996, "Bootstrap", 2011, "JS" , 1995, "React", 2013, "Java", 1995]

console.log(arrayuni);
console.log(arrayuni.length);
console.log(arrayuni[6]);
let mudanca = arrayuni.toString()
console.log(mudanca);
console.log(typeof mudanca);
console.log(arrayuni.join(" / "));
let arrayuni2 = arrayuni.unshift("IOS");
console.log(arrayuni);
console.log(arrayuni2);

//Array bidimensional
let arraybid = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
];

console.log(arraybid);
console.log(arraybid.length);
console.log(arraybid[2][1]);
arraybid[1][2] = "JavaScript"
console.log(arraybid);
delete arraybid[2][2];
console.log(arraybid);
let bidi = arraybid.push("Pipoca");
console.log(arraybid);