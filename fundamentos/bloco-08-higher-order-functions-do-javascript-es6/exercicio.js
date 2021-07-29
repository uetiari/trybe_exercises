// exercício 1
const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
    
  };
  return employees;
};

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
  };

console.table(newEmployees(employeeGenerator));

// exercício 2
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, numberChecker) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return numberChecker(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

// exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function answers (right, verify, check) {
  return checked = check(right, verify);
}
 const check = (a, b) => {
  let count = 0;
  for (let index = 0; index < a.length; index += 1) {
    if (b[index] === 'N.A') {
      count = count;
    } else if (a[index] === b[index]) {
      count += 1
    } else {
      count -= 0.5;
    }
  }
  return `Parabéns! Você tirou a nota ${count} !`;
 }
 console.log(answers(RIGHT_ANSWERS, STUDENT_ANSWERS, check));