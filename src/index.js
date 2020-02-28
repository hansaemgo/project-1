// function getGrade(score) {
//   if (score === 100) {
//     return 'A+';
//   } else if (score >= 90) {
//     return 'A';
//   } else if (score === 89) {
//     return 'B+';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score === 79) {
//     return 'c+';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score === 69) {
//     return 'D+';
//   } else if (score >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }
// const grade = getGrade(95);
// console.log(grade);

// const add = (a, b) => {
//   return a + b;
// };

const sum = add(1, 2);
console.log(sum);

const hello = name => {
  console.log(`Hello, ${name}! `);
};
hello('hansaem');

const add = (a, b) => a + b;
const sum = add(1, 3);
console.log(sum);
const add = (a, b) => {
  return a + b;
};
const sum = add(1, 3);
console.log(sum);

const add = (a, b) => a + b; // 코드 블록 없이 바로 리턴 값 넣기
const sum = add(1, 4);
console.log(sum);

const getGrade = score => {
  if (score === 100) {
    return 'A+';
  }
};

const grade = getGrade(100);
console.log(grade);
