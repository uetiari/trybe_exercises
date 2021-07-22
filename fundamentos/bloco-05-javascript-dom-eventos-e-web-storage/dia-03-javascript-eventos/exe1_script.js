function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const listOfDays = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    let dayLi = document.createElement('li');
    
    if (days === 24 | days === 31) {
      dayLi.className = 'day holiday';
      dayLi.innerHTML = days;
      listOfDays.appendChild(dayLi);
    } else if ( days === 4 | days === 11 | days === 18 ) {
      dayLi.className = 'day friday';
      dayLi.innerHTML = days;
      listOfDays.appendChild(dayLi);
    } else if ( days === 25) {
      dayLi.className = 'day holiday friday';
      dayLi.innerHTML = days;
      listOfDays.appendChild(dayLi);
    } else {
      dayLi.innerHTML = days;
      dayLi.className = 'day';
      listOfDays.appendChild(dayLi);
    }
  }
};
createDays();