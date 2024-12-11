function Chislo() {
    var result = prompt('Ваше число ');
    if (result === null) {
      document.querySelector('#otvet').textContent = "Вы отказались от ввода числа ";
    } else if (result.length > 0){
          document.querySelector('#otvet').textContent = (result * 2) +7;
    } 
  }