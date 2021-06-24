let piece = "Amarelo";

switch (piece.toLowerCase()) {
  case "rainha" :
    console.log("Rainha -> Horizontal e Vertical");
    break;
  case "rei" :
    console.log("Rei -> Serve pra nada, só pra morrer");
    break;
  case "bispo" : 
    console.log("Bispo -> Diagonais");
  default: 
    console.log("Peça inválida");
}
