let n = 5;
let asterix = "*";

for (let line = 0; line < n; line += 1){
  let line = "";
  for (let collumIndex = 0; collumIndex < n; collumIndex += 1){
    if (line < collumIndex) {
      line += ' ';
    } else {
      line += asterix;
    };
  };
  console.log(line);
}