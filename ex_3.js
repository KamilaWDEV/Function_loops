
/*Zmodyfikuj funkcję „rockPaperScissors” tak, 
aby *zwracała* rezultat zamiast go *wyświetlać*.
Zmień także funkcję tak, aby obsługiwała błędy.
Jeśli jeden z przekazanych funkcji argumentów nie ma wartości
„'rock'”, „'paper'” lub „'scissors'”, funkcja zwraca komunikat „Argument error”.
*/

/* Rozwiązanie */

function rockPaperScissors(firstPlayer,secondPlayer){

  if(firstPlayer==='rock' && secondPlayer==='rock')
  {
    return "Draw"
  }
  else if(firstPlayer==='rock' && secondPlayer==='paper'){
    return 'Second player wins'
  }
  else if(firstPlayer==='rock' && secondPlayer==='scissors'){
    return 'First player wins'
  }
  else if( firstPlayer==='paper' && secondPlayer==='scissors'){
    return 'Second player wins'
  }
  else if (firstPlayer!=='rock' || firstPlayer!=='paper' || firstPlayer!=='scissors' ||
  secondPlayer!=='rock' || secondPlayer!=='paper' || secondPlayer!=='scissors')
  return 'Argument error';
}




/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(rockPaperScissors('paper', 'scissors'), 'Second player wins');
  verify(rockPaperScissors('rock', 'potatoes'),'Argument error');
  verify(rockPaperScissors('glue', 'scissors'),'Argument error');
  verify(rockPaperScissors('rock', 'rock'),'Draw');
