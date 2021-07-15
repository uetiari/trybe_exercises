let player = {
  name: 'Maria',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
}

console.log('A jogadora '+ player.name +' '+ player.lastName +' tem '+ player.age +' anos de idade.')

player['bestInTheWorld'] =  [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player);
