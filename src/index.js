// // const dogName = '멍멍이';
// // const dogAge = 2;

// // console.log(dogName);
// // console.log(dogAge);

// const dog = {
//   Name: '멍멍이',
//   Age: 2,
//   cute: true,
//   sample: {
//     a: 1,
//     b: 2
//   }
// };

// console.log(dog.Name);

// const ironMan = {
//   name: '토니 스타크',
//   actor: '로버트 다우니 주니어',
//   alias: '아이언맨'
// };

// const captainAmerica = {
//   name: '스티븐 로저스',
//   actor: '크리스 에반스',
//   alias: '캡틴 아메리카'
// };

// console.log(ironMan);
// console.log(captainAmerica);

// function print(hero) {
//   const { alias, name, actor } = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// function print({ alias, name, actor }) {
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
//   console.log(text);
// }

// print(ironMan);
// print(captainAmerica);

// const { name } = ironMan;
// console.log(name);

// const dog = {
//   name: '멍멍이!',
//   sound: '멍멍!',
//   say: function say() {
//     console.log(this.sound);
//   }
// };

// dog.say();

// const cat = {
//   name: '야옹이',
//   sound: '야~옹',
//   say: () => console.log(this.sound)
// };
// cat.say(); // undefined

// const cat = {
//   name: '야옹이',
//   sound: '야~옹',
//   say: function() {
//     console.log(this.sound);
//   }
// };
// cat.say(); // 야~옹

// const numbers = {
//   a: 1,
//   b: 2,
//   get sum() {
//     console.log('sum함수가 실행됩니다.');
//     return numbers.a + numbers.b;
//   }
// };
// console.log(numbers.sum);
// numbers.b = 6;
// console.log(numbers.sum);

// const numbers = {
//   _a: 1,
//   _b: 2,
//   sum: 3,
//   calculate() {
//     console.log('calculate');
//     this.sum = this._a + this._b;
//   },
//   get a() {
//     return this._a;
//   },
//   get b() {
//     return this._b;
//   },
//   set a(value) {
//     this._a = value;
//     this.calculate();
//   },
//   set b(value) {
//     this._b = value;
//     this.calculate();
//   }
// };

// console.log(numbers.sum);
// numbers.a = 8;
// numbers.b = 99;
// console.log(numbers.sum);

// const person = {
//   firstName: 'Go',
//   lastName: 'hansaem',
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   }
// };

// console.log(person.fullName);

// const person = {
//   firstName: 'Go',
//   lastName: 'hansaem',
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// console.log(person.fullName);
// person.fullName = 'kim jihyun';
// console.log(person.fullName);
