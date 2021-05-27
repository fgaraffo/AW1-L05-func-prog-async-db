'use strict';

const dayjs = require('dayjs');

function Exam(code, name, CFU, score, laude, date) {
  this.code = code;
  this.name = name;
  this.CFU = CFU;
  this.score = score;
  this.laude = laude;
  this.date = date;  
};

function ExamList() {
  this.list = [];

  this.add = (e) => {
    this.list.push(e);
  };

  this.find = (code) => {
    for (const c of this.list)
      if(c.code === code)
        return c;
    return undefined;
  };

  this.afterDate = (date) => {
    return this.list.filter(course => course.date.isAfter(date));
  };

  this.listByDate = () => {
    return [...this.list].sort((a,b) => (a.date.isAfter(b.date) ? 1 : -1));
  };

  this.listByScore = () => {
    return [...this.list].sort((a,b) => (b.score - a.score));
  };

  this.average = () => {
    let avg = 0;
    for (const c of this.list)
      avg += c.score;
    avg /= this.list.length;

    return avg;
  };
};

// funzione per convertire il voto (score) da numeri a lettere
function usScore (exam) {

  const us = exam.list.map( element => {
   if (element.score > 27) return 'A'; 
   else if (element.score > 24) return 'B'; 
   else if (element.score > 19) return 'C'; 
   else return 'D';
  });

  const y = [...exam.list];
  for (const [i,el] of us.entries()){ y[i].score = el; }
  return y;
};

const wa1 = new Exam('01KTF', 'Web Applications I', 6, 30, false, dayjs('2021-06-01'));
const sdp = new Exam('02XXX', 'System and Device Programming', 10, 21, false, dayjs('2021-07-01'));

const exams = new ExamList();
exams.add(wa1);
exams.add(sdp);

/*
console.log("FIND");
console.log(exams.find('01KTF'));
console.log(exams.find('031KTF'));

console.log("AFTER DATE");
console.log(exams.afterDate(dayjs('2021-06-15')));
console.log("BY DATE");
console.log(exams.listByDate());
console.log("BY SCORE");
console.log(exams.listByScore());
console.log("AVERAGE");
console.log(exams.average());
*/

console.log(usScore(exams));

debugger;