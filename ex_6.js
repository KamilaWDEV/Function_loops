/* Ćwiczenie 6
 Napisz funkcję „pyramid”, 
 która przyjmuje jako argument wielkość podstawy 
 i rysuje piramidę składającą się ze znaków „#”.

 Write the function "pyramid",
  which takes the size of the base as an argument
  and draws a pyramid of "#" characters.
*/


/* Przypadek testowy:

Test:   pyramid(9)
Wynik:



 ``` #
    ###
   #####
  #######
 #########
 ```
Test: pyramid(1)
Wynik:
```#
```
Test: pyramid(5)
```#
  ###
 #####
```
*/

/* Rozwiązanie */

function pyramid(arg) {
  let row ="";
  if (arg % 2 === 1) {
    for (let i = 1; i <= (arg +1) / 2; i++){

      for (let j = 1; j <= arg - i; j++){
        row += " ";
      }

      for (let k = 0; k < 2 * i - 1; k++) {
        row += "#";
      }
      row += "\n";
    }
    console.log(row);
  }else {
    console.log("Arguments error")
  }
}


pyramid(1);
pyramid(2);
pyramid(3);
pyramid(4);
pyramid(9);





// Test:   pyramid(9)
// var string = ""
//   for (let i=1; i<=5; i++){ // to wyswieltla ile rzedów tym wypadku bedzie 4 rzedy
//     string = "";
//     for(let j=i; j<5; j++){ // ile gwiazdke w kazdym rzedzie, w tym wypadku 2 gwiadki
//      string += " ";
//     }
//     for (k=0; k<(i*2)-1;k++){
//       string += "#";
//     }
//    console.log(string);
//   }

//   // Test: pyramid(1)

//   var string = ""
//   for (let i=1; i<=1; i++){ // to wyswieltla ile rzedów tym wypadku bedzie 4 rzedy
//     string = "";
//     for(let j=i; j<4; j++){ // ile gwiazdke w kazdym rzedzie, w tym wypadku 2 gwiadki
//      string += "`";
//     }
//     for (k=0; k<(i*2)-1;k++){
//       string += "#";
//     }
//    console.log(string);
//   }


//   // Test: pyramid(5)
//   var string = ""
//   for (let i=1; i<=3; i++){ // to wyswieltla ile rzedów tym wypadku bedzie 4 rzedy
//     string = "";
//     for(let j=i; j<3; j++){ // ile gwiazdke w kazdym rzedzie, w tym wypadku 2 gwiadki
//      string += " ";
//     }
//     for (k=0; k<(i*2)-1;k++){
//       string += "#";
//     }
//    console.log(string);
//   }