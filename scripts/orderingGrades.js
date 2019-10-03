console.log("you made it to orderingGrades.js");
function inputGrades() {
  let grades = []
  let gradesAmount = prompt('how many grades are you gonna put in?')
  if (Number.isInteger(gradesAmount)==false){
    while (!Number.isInteger(gradesAmount)==false){
    let gradesAmount = prompt('how many grades are you gonna put in?')
    }
  }
  console.log(gradesAmount);
  let i = 0
  numberNotEntered:
  while (i < gradesAmount) {
    grades[i] = prompt("grade "+(i+1)+" (in percent)")
    if (isNaN(grades[i])){continue numberNotEntered}
    i++
  }
  grades.sort(function(a, b){return a-b});
  console.log(grades);
  let halfwayPoint = (gradesAmount/2)
  if (Number.isInteger(halfwayPoint) == false){halfwayPoint -= 0.5}
  let median = (grades[halfwayPoint])
  max = 0;
  mode = [];
  str = grades.sort();
  str = "~" + str.join('~~') + "~"
  str.replace( /(~-*\d+~)\1*/g, function(a, b
  ) {
      var m = a.length / b.length;
      if (max <= m ) {
          if (max < m) {mode = [];max = m;}
          mode.push( b.replace(/~/g,""));
      }
  });
  console.log(mode);
  let total = 0;
  i = 0;
  while (i < gradesAmount){
    total = Number(total) + Number(grades[i])
    i++
  }
  let avgGrade = (total/gradesAmount);
  console.log(avgGrade);
  let letterGrade
  if (avgGrade < 50) {letterGrade = 'F'}
  if (avgGrade > 50 && avgGrade < 60) {letterGrade = 'D'}
  if (avgGrade > 60 && avgGrade < 70) {letterGrade = 'C'}
  if (avgGrade > 70 && avgGrade < 80) {letterGrade = 'B'}
  if (avgGrade > 80) {letterGrade = 'A'}
  console.log('your letter grade is ' + letterGrade + '. Your average grade is ' + avgGrade + '. the median is ' + median + '. the mode is ' + mode);
}
