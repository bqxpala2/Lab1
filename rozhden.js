
function checkAnswer() {
    var result = prompt('Как вас зовут?', 'Имя');
    if (result === null) {
      document.querySelector('#answer').textContent = "Вы отказались назвать свое имя";
    } else if (result.length > 0){
          document.querySelector('#answer').textContent = 'Привет, ' + result;
    } else {
              document.querySelector('#answer').textContent = 'Какое необычное имя... И такое короткое!';
    }
  }
  function checkAnswer1() {
    var result = prompt('Введите дату рождения ');
    if (result === null) {
      document.querySelector('#answer1').textContent = "Вы отказались от вводв года рождения ";
    } else if (result.length > 0){
          document.querySelector('#answer1').textContent = 2024 - result;
    } 
  } 