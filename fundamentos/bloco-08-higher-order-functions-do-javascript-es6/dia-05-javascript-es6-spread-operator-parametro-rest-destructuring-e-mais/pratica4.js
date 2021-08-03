let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;
//as vírgulas são usadas para ignorar as 3 primeiras posições pois não são pares!

console.log(numerosPares); // [6, 8, 10, 12];