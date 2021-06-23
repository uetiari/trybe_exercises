let t1 = 90;
let t2 = 70;
let t3 = 20;

let allT = t1 + t2 + t3;
let allTpositive = t1 > 0 && t2 > 0 && t3 > 0;

if (allTpositive){
  if (allT == 180){
    console.log(true);
  } else {
    console.log(false);
  };
}
else {
  console.log("Ângulo inválido");
}

