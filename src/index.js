// const a = 1;
// if (true) {
//   const a = 2;
//   console.log('if문 안의 a값은' + a);
// }
// console.log('if문 밖의 a값은' + a);

// const a = 10;
// if (a > 15) {
//   console.log('a가 15보다 큽니다.');
// } else {
//   console.log('a가 15보다 크지 않습니다.');
// }

// const a = 7;
// if (a === 5) {
//   console.log('5 입니다.');
// } else if (a === 10) {
//   console.log('10 입니다.');
// } else {
//   console.log('5도 아니고 10도 아닙니다.');
// }

const device = 'ipad';
switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
  case 'galaxy note':
    break;
    console.log('갤럭시 노트');
    break;
  default:
    console.log('잘 모르겠네요');
}
