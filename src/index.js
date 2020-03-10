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
// const array = [1, 2, 3, 4, 5];
// console.log(array);
// const array2 = [1, 'blabla', {}];
// console.log(array2[2]);

// const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
// objects.push({
//   name: '보오리'
// });

// console.log(objects[2]);

// const array = [1, 2, 3, 4];
// array.push(5);
// console.log(array);

// objects.push({
//   name: '이히히리'
// });

// console.log(objects);

// const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
// console.log(objects.length);
// objects.push({ name: '보오링' });
// console.log(objects[2]); // { name : '보오링'}
// console.log(objects.length);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const names = ['보리', '은비', '까비'];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// let isFun = false;
// while (isFun === false) {

//   console.log(i);
//   i++;
//   if (i === 5) {
//     isFun = true;
//   }
// }

// const numbers = [10, 20, 30, 40, 50];
// for (let number of numbers) {
//   console.log(number);
// }

// const doggy = {
//   name: '멍멍이',
//   sound: '멍멍',
//   age: 2
// };
// // console.log(Object.entries(doggy));
// // console.log(Object.keys(doggy));
// // console.log(Object.values(doggy));

// for (let key in doggy) {
//   console.log(`${key} : ${doggy[key]}`);
// // }

// function sumOf(numbers) {

//  const result = sumOf([1, 2, 3, 4, 5]);
//  console.log(result);

// function sumNum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sum += numbers[i];
//   }
//   return sum;
// }

// const result = sumNum([1, 2, 3, 4, 5]);
// console.log(result);

// function biggerThanThree(numbers) {
//   const array = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 3) {
//       array.push(numbers[i]);
//     }
//     return array;
//   }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers));

// function biggerThanThree(numbers) {
//   const array = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 3) {
//       array.push(numbers[i]);
//     }
//   }
//   return array;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

// const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// function print(hero) {
//   console.log(hero);
// }

// superheroes.forEach(function(hero) {
//   console.log(hero);
// });

// superheroes.forEach(hero => {
//   console.log(hero);
// });

// array.forEach(n = n*n) => {
//     array.push([n]);
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const squared = [];
// array.forEach(n => {
//   squared.push(n * n);
// });

// console.log(squared);

// const squeard = [];
// array.forEach(n => {
//   squeard.push(n * n);
// });

// console.log(squeard);

// const squared = array.map(n => n * n);
// console.log(squared);

// const square = n => n * n;
// const squared = array.map(square);
// console.log(squared);

// const squared = array.map(n => n * n);
// console.log(squared);

// const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// const index = superheroes.indexOf('토르');
// console.log(index); // 2

// const todos = [
//   {
//     id: 1,
//     text: '자바스크립트 입문',
//     done: true
//   },
//   {
//     id: 2,
//     text: '함수 배우기',
//     done: true
//   },
//   {
//     id: 3,
//     text: '객체와 배열 배우기',
//     done: true
//   },
//   {
//     id: 4,
//     text: '배열 내장함수 배우기',
//     done: false
//   }
// ];

// const todo = todos.find(todo => todo.id === 3);
// console.log(todo);

// const taskNotDone = todos.filter(todo => todo.done === false);
// console.log(taskNotDone);

// const number = [10, 20, 30, 40];
// const index = number.indexOf(30);
// // const numbers = number.splice(index, 1);
// console.log(number);
// // console.log(numbers);

// const number = [10, 20, 30, 40];
// const sliced = number.slice(0, 2);

// console.log(sliced); // [10, 20]
// console.log(number); // [10, 20, 30, 40]

// const number = [10, 20, 30, 40, 50];
// number.unshift(5);
// console.log(number);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const concated = arr1.concat(arr2);
// console.log(concated);

// const array = [1, 2, 3, 4, 5];
// console.log(array.join());
// console.log(array.join('/'));

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(n => {
//   sum = sum + n;
// });

// console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, current, index, array) => {
//   if (index === array.length - 1) {
//     return (acc + current) / array.length;
//   }
//   return acc + current;
// }, 0);
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
// // let sum = numbers.reduce((acc, current) => acc + current, 0);

// // console.log(sum);
// let avg = numbers.reduce((acc, current, index, array) => {
//   if (index === array.length - 1) {
//     return (acc + current) / array.length;
//   }
//   return acc + current;
// });
// console.log(avg);

// const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

// const counts = alphabets.reduce((acc, current) => {
//   if (acc[current]) {
//     acc[current] += 1;
//   } else {
//     acc[current] = 1;
//   }
//   return acc;
// }, {});

// console.log(counts);

// function countBiggerThanTen(numbers) {
//   //   let count = 0;
//   //   numbers.forEach(n => {
//   //     if (n > 10) {
//   //       count++;
//   //     }
//   //   });
//   //   return count;

//   return numbers.filter(n => n > 10).length;
// }

// const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
// console.log(count); // 5

// function Animal(type, name, sound) {
//   // 객체생성자
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function() {
//   console.log(this.sound);
// };
// Animal.prototype.sharedValue = 1;

// const dog = new Animal('개', '보리', '월월'); // 새로운 객체 만들기
// const cat = new Animal('고양이', '굴비', '야옹'); // 객체 생성자를 사용하는 방법

// dog.say();
// cat.say();
// console.log(dog.sharedValue);
// console.log(cat.sharedValue);

// function Animal(type, name, sound) {
//   this.type = type;
//   this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function() {
//   console.log(this.sound);
// };

// function Dog(name, sound) {
//   Animal.call(this, '개', name, sound);
// }

// function Cat(name, sound) {
//   Animal.call(this, '고양이', name, sound);
// }
// Dog.prototype = Animal.prototype;

// Cat.prototype = Animal.prototype;
// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('야옹이', '야옹');

// dog.say();
// cat.say();

class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}
console.log(Animal.prototype.say);

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('보리', '멍멍');
const cat = new Cat('나비', '야옹');

dog.say();
cat.say();
