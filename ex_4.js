/*Napisz funkcję „printVowels”, 
która przyjmuje jako argument ciąg znaków
 i wyświetla jedynie zawarte w nim samogłoski.
Samogłoski to „a”, „e”, „i”, „o”, „u”.
*/

/* Rozwiązanie */
function printVowels(str){
    const vowels = str.match(/[aeiou]/gi)
    if (vowels !== null){
      return vowels.join("");
    } else {
      return "";
    }
  }

module.exports = printVowels;

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(printVowels('hello world'), 'eoo');
  verify(printVowels('kangaroo'),'aaoo');
  verify(printVowels('cheeseburger'),'eeeue');
  verify(printVowels('rhythm'),'');
 