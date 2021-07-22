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

function holidayBtn(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const btnHoliday = document.createElement('button');
  const btnHolidayId = 'btn-holiday';

  btnHoliday.innerHTML = string;
  btnHoliday.id = btnHolidayId;
  btnContainer.appendChild(btnHoliday);

}

holidayBtn('Feriados');

function changeColorHolidays() {
  let btnHoliday = document.querySelector('#btn-holiday');
  let dayHoliday = document.querySelectorAll('.holiday');
  let white = 'white';
  let rgb = 'rgb(238,238,238)';
  
  btnHoliday.addEventListener('click', function() {
    for (let index = 0; index < dayHoliday.length; index += 1) {
      if (dayHoliday[index].style.backgroundColor === white ) {
        dayHoliday[index].style.backgroundColor = rgb;
      } else {
        dayHoliday[index].style.backgroundColor = white;
      }
    }
  })
};

changeColorHolidays();

function fridayBtn(string) {
  const btnContainer = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  const btnFridayId = 'btn-friday';

  btnFriday.innerHTML = string;
  btnFriday.id = btnFridayId;
  btnContainer.appendChild(btnFriday);

}

fridayBtn('Sexta-feira');

function fridays(array) {
  const btnFriday = document.querySelector('#btn-friday');
  const fridays = document.getElementsByClassName('friday');
  const fridayText = 'SEXTOU =D';

  btnFriday.addEventListener('click', function(){
    for (let index = 0; index < fridays.length; index += 1){
      if (fridays[index].innerHTML !== fridayText) {
        fridays[index].innerHTML = fridayText;
      } else {
        fridays[index].innerHTML = array[index];
      }
    }
  })
}
const listFriday = [ 4, 11, 18, 25];
fridays(listFriday);

function zoomDayIn() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function zoomDayOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

zoomDayIn();
zoomDayOut();

function newTask(string) {

  let myTasks = document.querySelector('.my-tasks');
  let newSpan = document.createElement('span');

  newSpan.innerHTML = string;
  myTasks.appendChild(newSpan);
};

newTask('Exercício: 1');

function newTaskColor(color) {
  let myTask = document.querySelector('.my-tasks');
  let newDiv = document.createElement('div');

  newDiv.className = 'task';
  newDiv.style.backgroundColor = color;
  myTask.appendChild(newDiv);
};

newTaskColor('green');

function selectedTask() {
  let taskSelected = document.getElementsByClassName('task selected');
  let task = document.querySelector('.task');

  task.addEventListener('click', function(event) {
    if (taskSelected.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

selectedTask();

function changeColorDay() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

changeColorDay();