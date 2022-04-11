/* Ćwiczenie 7
Napisz funkcję „subDigits”,
która jako argument przyjmuje liczbę całkowitą
i zwraca wynik, który jest wprowadzoną liczbą
po odjęciu od niej wartości jej cyfr.
Na przykład: jeśli liczbą jest 12, funkcja zwraca  12 - 1 - 2 => 9.
Jeśli liczba jest ujemna, funkcja zwraca komunikat „Argument Error”.

Write the function "subDigits",
which takes an integer as an argument
and returns the result which is the entered number
after subtracting the value of its digits from it.
For example, if the number is 12, the function returns 12-1-2 => 9.
If the number is negative, the function returns the message "Argument Error"
*/
 

/* Rozwiązanie */

function subDigits(num) {
  let numArr = String(num).split("").map((num) => {
    return Number(num)});

    let sumNumArr = 0;
    for (let i=0; i<numArr.length; i++){ 
      sumNumArr += numArr[i]
    }

    let result = num - sumNumArr;

    if (num < 0 || num !== Number(num)){
      return "Arguments Error";
    } else {
      return result;
    }
  }


      







/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(subDigits(12), 9);
  verify(subDigits(4000000),3999996);
  verify(subDigits(0),0);
  verify(subDigits(451), 441);
  verify(subDigits(-12), 'Argument Error');
  