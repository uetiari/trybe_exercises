let n = 5;
let asterix = "*";
let line = "";
// let inputPosition = n;


for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
  for (let collumIndex = 0; collumIndex < 0; collumIndex += 1){
    if (collumIndex < n) {
      line = line + ' ';
    } else {
      line = line + asterix;
    };
  };
  console.log(line);
  line = "";
  n -= 1;
}

//Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };