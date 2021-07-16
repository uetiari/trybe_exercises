let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

for (let key in info) {
  console.log('Bem vinda, '+ info.personagem);
}
info['recorrentes'] = 'Sim';
console.log(info);
for (let key in info) {
  console.log(key);
}


// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
// };
// info2['recorrentes'] = 'sim';
// for (let key in info2){
//  console.log(info2[key]);
// }

