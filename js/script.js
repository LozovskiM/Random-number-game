var randomNr;
var id_nr_game;
var check_answer;
var msg_confirm;
var counter = 0;
var counter_msg;

randomNr = Math.floor((Math.random() * 100) + 1);

document.getElementById('id_button').addEventListener('click', function() { 
  check_nr();
});

document.getElementById('id_nr_game').addEventListener('keyup', function(event){
  if (event.which === 13) {
    check_nr();
  }
});

function check_nr() {
	
  counter++;
  id_nr_game = document.getElementById('id_nr_game').value;
  
  document.getElementById('id_nr_game').value = '';
  document.getElementById('id_nr_game').focus();
  
  check_answer = document.getElementById('check_answer');
  
  counter_msg = document.getElementById('id_counter');
  
  counter_msg.innerHTML = 'Сделано попыток : ' + counter;
  
  if (id_nr_game.indexOf('.') != -1 || id_nr_game.indexOf(',') != -1) {
    check_answer.innerHTML = 'Введите натуральное число';
  } else if (id_nr_game == '' || isNaN(id_nr_game)) {
    check_answer.innerHTML = 'Введите натуральное число';
  } else if (id_nr_game < 0 || id_nr_game > 100) {
    check_answer.innerHTML = 'Указанное число выходит за рамки допустимого диапазона';
  }   
  else {
      if(id_nr_game == randomNr) {
      
      msg_confirm = window.confirm('Браво! Сделано попыток ' + (counter--) + '! Вы хотите играть снова?');
        check_answer.innerHTML = '';
        if(msg_confirm == true) {
          randomNr = Math.floor((Math.random() * 100) + 1);
		  counter_msg.innerHTML = '';
          counter = 0;
        } else {
          document.getElementById('game_field').style.display = 'none';
          check_answer.innerHTML = 'Поздравляю с победой. Спасибо за игру.';
          check_answer.style.color = 'red';
		  counter_msg.innerHTML = 'Правильное число было отгадано за :' + (counter--) + 'попыток';
        }
      
    } else if(id_nr_game > randomNr) {
      check_answer.innerHTML = 'Указанное число больше случайного. Попробуйте еще раз';
    } else {
      check_answer.innerHTML = 'Указанное число меньше случайного. Попробуйте еще раз';
    }
  }
}