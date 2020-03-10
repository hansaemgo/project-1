# JavaScript 입문

## 01. 변수와 상수

### 변수

---

- 특정 이름에 특정 값을 담을 때 사용
- 변수는, 바뀔수 있는 값을 말하며, 한번 선언하고 나서 바꿀 수 있음

  ```javascript
  console.log('hello'); // hello
  let value = 1;
  console.log(value); // 1
  value = 2;
  console.log(value); // 2
  ```

- 선언시 `let`이라는 키워드 사용 **한번선언 시 같은이름 선언 불가**

  ```javascript
  let value = 1;
  let value = 2;
  ```

  ![value error](/src/image/variation_error.jpg)

### 상수

---

- 상수는 값이 고정적, 한번 선언하고 값이 바뀌지 않는다.
  ```javascript
  const a = 1;
  ```
- 상수를 선언할 때도 마찬가지로 한번 선언 후 같은 이름으로 선언 불가능

  ```javascript
  const a = 1;
  const a = 2;
  ```

  ![constant error](/src/image/constant_error.jpg)

  > **`var`와`let`의 중요한 차이점은 똑같은 이름으로 여러번 선언 할 수 있느냐 없느냐 이다**<br> > **`var`와`let`은 사용 범위가 다르다.`var`사용 지양**

---

### 데이터 타입

#### 숫자 (Number)

- 그냥 바로 값을 대입한다

```javascript
let value = 1;
```

#### 문자열(String)

- 작은따옴표 혹은 큰 따옴표로 감싸서 선언한다.

```javascript
let value = 'hello';
```

#### 참/거짓(Boolean)

```javascript
let good = true; // 참
let loading = false; // 거짓
```

#### null 과 undefined

- 없음을 의미

```javascript
const friend = null; // 친구가 없다 (null)
let criminal;
console.log(criminal); // 범인이 아직 정해지지 않았다 (undefined)
```

## 02. 연산자

### 산술 연산자

---

- 사칙 연산과 같은 작업을 하는 연산자

  - `+` : 덧셈
  - `-` : 뺄셈
  - `*` : 곱셈
  - `/` : 나눗셈

  ```javascript
  let a = 1 + 2;
  console.log(a); //3
  let b = 1 + 2 - (3 * 4) / 4; // 0
  ```

산술 연출자의 일부

```javascript
let d = 1;
d++; // 특정 변수에 1을 바로 더해줌 (더하기 직전 값 보여줌)
++d; // 특정 변수에 1을 바로 더해줌 (더한다음의 갑승ㄹ 보여준다)
console.log(d);
```

#### 대입 연산자

---

특정 값에 연산을 한 값을 바로 설정할 때 사용할 수 있는 연산자

```javascript
let a = 1;
a += 3;
```

### 논리 연산자

---

보통 불리언타입을 위한 연산자(true 혹은 false) **if 문을 배울때 유용**

- `!` : MOT
- `&&` : AND
- `||` : OR

#### NOT

---

- NOT 연산자는 True는 False로 False는 True로 바꿔줍니다.

```javascript
const a = !true;
console.log(a); // false
```

#### AND

---

- AND 연산자는 양쪽의 값이 둘 다 true 일때만 결과물이 true 입니다.

```javascript
const a = true && true;
console.log(a); // ture
let f = false && false;
console.log(f); // false
```

#### OR

---

- OR 연산자는 양쪽의 값 중 하나라도 true 라면 결과물이 true 입니다

```javascript
let t = true || false;
console.log(t); // true
```

#### 연산순서

---

- 논리연산자의 순서는 MOT -> AND -> OR 입니다

```javascript
const value = !((true && false) || (true && false) || !false);
  1. NOT 처리 : !((true && false) || (true && false) || true)
  2. AND 처리 : !( false || false || true )
  3. OR 처리 : !true
  4. 답 : false
```

### 비교 연산자

---

- 비교연산자는 두 값을 비교할 때 사용

#### 두 값이 일치하는지 확인

---

```javascript
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals); // true
```

> **`===`는 두 값이 일치하는지 확인해준다 일치하면 true 일치하지 않으면 false**<br/> > **`==`는 두 값이 일치하는지 확인해주지만 타입 비교 하지 않는다.** > **0 과 false도 같은 값으로 간주** > **undefined 와 null도 같은 값으로 간주**

#### 두 값이 일치하지 않는지 확인

---

- 두 값이 일치하지 않는지 확인 할 때에는 `!==`을 사용

```javascript
const value = 'a' !== 'b';
console.log(value);
console.log(1 != '1'); // false type검사 안함
console.log(1 !== '1'); // true
```

#### 크고작음

---

- 두 값중에서 무엇이 더 크고 작은지 비교하기 위해서 다음 연산자를 사용 할 수 있다

```javascript
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); //true
console.log(b > a); //true
console.log(b >= a); //true
console.log(a <= c); //true
console.log(b < c); //false
```

#### 문자열 붙이기

---

- 문자열을 붙을때는 `+`로 할 수 있습니다.

```javascript
const aa = '안녕';
const bb = '하세요.';
console.log(aa + bb); //안녕하세요
```

## 03. 조건문

- 조건문을 사용하면 특정 조건이 만족됐을 때 특정 코드를 실행할 수 있습니다.

### if 문

---

- 가장 기본적인 조건문으로 " ~ 하다면 ~ 를 해라"를 의미한다
  ```javascript
  const a = 1;
  if (a + 1 ==== 2) {
    console.log('a + 1 이 2입니다.'); // a + 1 이 2입니다.
  }
  ```
- 특정 조건이 만족 될 때에만 특정 코드를 실행 시킬 수 있다.
- 조건이 만족 되었을 때, 실행시킬 코드가 `{ }`로 감싸져 있는데 이를 코드블록이라고 한다.
- 조건이 `ture`일 경우 코드실행, `false`일 경우 실행되지 않는다.
  ```javascript
  if (조건) {
    코드;
  }
  ```
- `let`과`const`는 다른 블록 범위에서 똑같은 이름으로 선언이 가능하다
  ```javascript
  const a = 1;
  if (true) {
    const a = 2;
    console.log('if문 안의 a값은' + a); // 2
  }
  console.log('if문 밖의 a값은' + a); // 1
  ```

### if-else 문

---

- " ~ 하다면 ~ 하고, 그렇지 않다면 ~ 해라" 를 의미한다
- 특정 조건이 만족할 때와 만족하지 않을 때, 서로 다른 코드를 실행해야 된다면 if-else구문 사용
  ```javascript
  const a = 10;
  if (a > 15) {
    console.log('a가 15보다 큽니다.');
  } else {
    console.log('a가 15보다 크지 않습니다.'); //a가 15보다 크지 않습니다.
  }
  ```

### if-else if문

---

- if-else if 문은 여러 조건에 따라 다른 작업을 해야할때 사용

```javascript
const a = 10;
if (a === 5) {
  console.log('5 입니다.');
} else if (a === 10) {
  console.log('10 입니다.'); // 10 입니다.
} else {
  console.log('5도 아니고 10도 아닙니다.');
}
```

- ex ) a = 7일 경우 '5도 아니고 10도 아닙니다.

### switch/case 문

---

- switch/case문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용
- 각 case 에서 실행할 코드를 작성하고 마지막에 break를 해주어야 한다. 아니면 다음 case의 코드까지 실행
- `default:`는 case로 준비하지 않은 값의 경우
  ```javascript
  const device = 'iphone';
  switch (device) {
    case 'iphone':
      console.log('아이폰!'); //아이폰
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
  ```

## 04. 함수

---

- 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능
  ```javascript
  function add(a, b) {
    // a와B는 파라미터(매게변수) : 어떤값을 받아올지 정해준다
    return a + b;
    console.log('호출이 되지 않는 코드!'); // return 다음 코드는 실행이 되지 않는다.
  }
  const sum = add(2, 6);
  console.log(sum); //8
  ```
- 템플릿 리터럴 사용해보기

  ```javascript
  function hello(name) {
    console.log(`hello ${name}! `);
  }
  hello('hansaemgo');
  ```

- 점수를 성적등급으로 변환하기 (점수를 A, B, C, D, F 등급으로 반환하는 함수만들기)
  ```javascript
  function getGrade(score) {
    if (score === 100) {
      return 'A+';
    } else if (score >= 90) {
      return 'A';
    } else if (score === 89) {
      return 'B+';
    } else if (score >= 80) {
      return 'B';
    } else if (score === 79) {
      return 'c+';
    } else if (score >= 70) {
      return 'C';
    } else if (score === 69) {
      return 'D+';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  const grade = getGrade(95);
  console.log(grade); // A
  ```
- 화살표 함수 ( 함수를 선언하는 방식 중 또 다른 방식)
  ```javascript
  const add = (a, b) => {
    return a + b;
  };
  const sum = add(1, 3);
  console.log(sum);
  ```
- 화살표 함수 좀더 간결하게 표기하기

  ```javascript
  const add = (a, b) => a + b; // 코드 블록 없이 바로 리턴 값 넣기
  const sum = add(1, 4);
  console.log(sum);
  ```

## 05. 객체

- 어떤 값을 선언할때 하나의 이름에 여러종류의 값을 넣을 수 있게 해준다.
- 기존에 변수나 상수를 선언하는 식으로 값을 주면
  ```javascript
  const dogName = '멍멍이';
  console.log(dogName); //멍멍이
  const dogAge = 2;
  console.log(dogAge); // 2
  ```
- 객체 사용시 중괄호 사용하여 원하는 값 넣어줄 수 있음
  const 객체 이름 {
  키(키 값은 공백이 없어야 하며, 공백이있어야 하는 상황이면 따옴표로 감싸서 문자열로) : 원하는 값,
  }

  ```javascript
  const dog = {
    Name: '멍멍이',
    Age: 2,
    cute: true,
    sample: {
      a: 1,
      b: 2
    }
  };
  console.log(dog); // object{Name:'멍멍이', Age: 2, cute : true, sample:{a: 1, b: 2}}
  console.log(dog.Name); // 멍멍이
  ```

  - 함수의 파라미터에서도 객체를 받아와서 사용 가능하다

  ```javascript
  const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  console.log(ironMan); //object{name:'토니 스타크', actor: '로버트 다우니 주니어', alias: 아이언맨' }

  function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
  }

  print(ironMan); // 아이언맨(토니스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
  ```

### 객체 비구조화 할당

---

- 상단 print 함수에서 hero내부 값을 조회할때마다 `hero.`를 중복 입력, 객체 비구조화 할당을 통해 짧게 작성
- 객체 비구조화 할당 `or` 객체 구조분해 (객체에서 특정 값을 추출)

  1. 객체에서 값들을 추출하여 새로운 상수로 선언 해주는 방법

  ```javascript
  function print(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  print(ironMan); // 아이언맨(토니스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
  ```

  2. 파라미터 단계에서 객체 비구조화 할당

  ```javascript
  function print({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  print(ironMan); // 아이언맨(토니스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
  ```

  ```javascript
  const { name } = ironman;
  console.log(name); // 토니스타크
  ```

### 객체 안에 함수 넣기

---

- `function` 키워드로 만들었을때의 `this`는 자기가 속해있는 부분을 가르킴
  ```javascript
  const dog = {
    name: '멍멍이!',
    sound: '멍멍!',
    say: function say() {
      console.log(this.sound); // 여기서 가르키는 `this`는 함수가 위치한 객체 자기자신 dog를 가르킨다
    }
  };
  dog.say(); // (dog.sound) // 멍멍!!
  ```
- 화살표 함수 내부에서는 `this`가 뭔지 모른다
  ```javascript
  const cat = {
    name: '야옹이',
    sound: '야~옹',
    say: () => console.log(this.sound)
  };
  cat.say(); // undefined
  ```
- 익명함수는 가능
  ```javascript
  const cat = {
    name: '야옹이',
    sound: '야~옹',
    say: function() {
      console.log(this.sound);
    }
  };
  cat.say(); // 야~옹
  ```

### Getter 함수와 Setter함수

---

- Getter 함수 (속성의 값을 얻어오는 메소드)
  1. Getter함수 앞에 `get`을 붙인다. 또한 return으로 값을 반환해 주어야 한다.
  2. 특정값을 조회하려고 할때(호출X), 특정 연산된 값을 받아서 사용하는 것을 의미.
  ```javascript
  const numbers = {
    a: 1,
    b: 2,
    get sum() {
      console.log('sum함수가 실행됩니다.');
      return numbers.a + numbers.b;
    }
  };
  console.log(numbers.sum);
  numbers.b = 6;
  console.log(numbers.sum);
  ```
- Setter 함수 (속성의 값을 설정하는 메소드)
  1. 특정 값을 바꾸려고 할때 사용한다.
  2. Setter 함수 앞에 `set`을 붙인다.
  ```javascript
  const dog = {
    _name: '멍멍이', // setter함수와 이름 헷갈리지 않도록 언더바 붙여줌
    set name(value) {
      console.log(`이름이 바뀝니다..... ${value}`);
      this._name = value;
    }
  };
  console.log(dog._name); // 멍멍이
  dog.name = '보리';
  console.log(dog._name); // 이름이 바뀝니다....보리  // 보리
  ```
- 예제 만들기 (Getter 함수와 Setter 함수 사용해서 calculate)
  ```javascript
  const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      this._a = value;
      this.calculate();
    },
    set b(value) {
      this._b = value;
      this.calculate();
    }
  };
  console.log(numbers.sum);
  numbers.a = 7;
  numbers.b = 9;
  console.log(numbers.sum);
  ```
- Getter and Setter 예제2
  ```javascript
  const person = {
    firstName: 'Go',
    lastName: 'hansaem',
    fullName() {
      return `${person.firstName} ${person.lastName}`;
    }
  };
  console.log(person.fullName());
  ```
  - 이름을 가져올수만 있고 설정 할수 없음. `console.log(person.fullName());`으로 호출히야함
  - 수정 (get, set)
  ```javascript
  const person = {
    firstName: 'Go',
    lastName: 'hansaem',
    get fullName() {
      return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
      const parts = value.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  console.log(person.fullName);
  person.fullName = 'kim jihyun';
  console.log(person.fullName);
  ```

## 06. 배열

- 여러개의 항목이 들어있는 리스트와 같다
- 배열을 선언할때 `[]`대괄호 안에 나열해준다.
  ```javascript
  const array = [1, 2, 3, 4, 5];
  console.log(array[0]); // 1
  ```
- 객체 형태의 배열도 선언이 가능하다.

  ```javascript
  const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
  console.log(objects[1]); //  {name : '야옹이'}
  ```

  ### 배열의 [n]번째 항목 조회

  - 배열 선언후 n번째 항목 조회 하고 싶을 때,

    ```javascript
    console.log(array[n]); // n번째 항목
    ```

  ### 배열에 새 항목 추가 하기

  - 기존배열의 이름 `push`({ 추가할 항목 })

    ```javascript
    const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
    objects.push({ name: '보오링' });
    console.log(objects[2]); // { name : '보오링'}
    ```

  ### 배열의 크기 알아내기

  - 배열의 크기를 알아낼때 `length`값을 확인
    ```javascript
    const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
    console.log(objects.length); // 2
    objects.push({ name: '보오링' });
    console.log(objects.length); // 3
    ```

## 07. 반복문

---

- 반복문은 특정 작업을 반복적으로 할 때 사용할 수 있는 구문

  ### 1.for

  ```javascript
  for (초기구문; 조건구문; 변화구문) {
    코드;
  }
  ```

  - 가장 기본적인 반복문, 특정 값에 변화를 주면서 조건이 만족된다면 계속 반복
  - `i++` 또는 `i--`등 증감 형태로 변화구문을 사용한다

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
  }
  ```

  ### 1-1.배열과 for

  - 배열이름`.length`는 배열 안의 원소의 갯수를 셀 수 있다.
  - `console.log(name[i]);` 배열의 원소를 하나하나 나열하게 해준다.

  ```javascript
  const names = ['보리', '은비', '까비'];
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // 보리 은비 까비
  }
  ```

  ### 2.while

  - 특정 조건이 참이라면 계속해서 반복하는 반복문 (주로 숫자비교가 아닌 참/거짓을 구분하는 조건문에 사용)
  - `for`문과 다르게 `let i = 0`과같은 초기구문이 `while`문 밖에 위치한다
  - 중요한 점은 조건이 언젠가는 `false`가 되도록 만들어줘야 한다 `true`인경우 무한루프
  - 위의 `for`문 `while`문으로 고치기

  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i); // 0 1 2 3 4
  }
  ```

  ***

  ```javascript
  let i = 0;
  let isFun = false;
  while  { // (isFun === false)
    // isFun이 false일때 반복해라
    console.log(i);
    i++;
    if (i === 5) {
      isFun = true;
    }
  }
  ```

  ### 3.for... of

  - 배열에 관한 반복문을 돌리기 위해서 만들어진 반복문

  ```javascript
  const numbers = [10, 20, 30, 40, 50];
  for (let number of numbers) {
    console.log(number);
  }
  ```

  ### 4.for...in

  - 객체에 대한 반복적인 작업에 사용
  - 객체의 정보를 배열 형태로 받아 올 수 있는 함수
    ```javascript
    const doggy = {
      name: '멍멍이',
      sound: '멍멍',
      age: 2
    };
    console.log(Object.entries(doggy)); // [[키, 값], [키, 값]] 형태의 배열로 변환
    console.log(Object.keys(doggy)); // name, sound , age [ 키, 키, 키] 형태의 배열
    console.log(Object.values(doggy)); // '멍멍이', '멍멍' [값, 값, 값] 형태의 배열
    ```
    ```javascript
    for (let key in doggy) {
      console.log(`${key} : ${doggy[key]}`); // 키 : 값 형태로 출력
    }
    ```

  ### 5.continue & break

  - `continue` 다음루프를 돌게한다 `break`는 반복문을 벗어나게 한다.

  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 다음루프 실항하게 한다 (2 건너뛰기)
    console.log(i); // 반복문 끝내기
    if (i === 5) break;
  }
  ```

  ### 6. 퀴즈

  - numbers 를 파라미터로 받아와서 총합을 구하는 함수 만들기

  ```javascript
  function sumNum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
      sum += numbers[i];
    }
    return sum;
  }
  const result = sumNum([1, 2, 3, 4, 5]);
  console.log(result);
  ```

  - 3보다 큰 numbers 배열 리턴하기

  ```javascript
  function biggerThanThree(numbers) {
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 3) {
        array.push(numbers[i]);
      }
    }
    return array;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
  ```

## 08. 배열 내장함수

---

### 1.forEach

- `forEach`는 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어 사용하는 배열 내장함수
- 기존에 배운 `for`문을 대체 할 수 있다.

  ```javascript
  const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
  superheroes.forEach(hero => {
    console.log(hero);
  });
  ```

### 2.map

- `map`은 배열 안의 각 원소를 변환 할 때 사용 (새로운 배열 만들어짐)
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const square = n => n * n;
  const squared = array.map(square);
  console.log(squared);
  ```
- 변화함수에 이름을 붙일 필요없이 짧게 사용가능
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const squared = array.map(n => n * n);
  console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64]
  ```

### 3.indexOf

- `indexOf`는 원하는 항목이 몇번째 원소인지 찾아주는 함수

  ```javascript
  const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
  const index = superheroes.indexOf('토르');
  console.log(index); // 2
  ```

### 4.findIndex

- 배열 안의 값의 객체이거나 배열일때 찾아내고자 하는 항목이 몇번째인지 알아내기 위한 내장함수

  ```javascript
  const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];

  const index = todos.findIndex(todo => todo.id === 2);
  console.log(index); // 1
  ```

### 5.find

- `find`는 몇번째인지가 아니라 찾아낸 값 자체를 반환
  ```javascript
  const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  const todo = todos.find(todo => todo.id === 3);
  console.log(todo); // {id: 3, text: "객체와 배열 배우기", done: true}
  ```

### 6.filter

- `filter`는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다.

  ```javascript
  const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];

  const taskNotDone = todos.filter(todo => todo.done === false);
  console.log(taskNotDone);
  ```

  ```javascript
  const taskNotDone = todos.filter(todo => todo.done === false);
  위의 코드와
  const taskNotDone = todos.filter(todo => !todo.done) // false 와 같음
  const taskNotDone = todos.filter(todo => todo.done) // true 와 같음
  ```

### 7.splice

- `splice`는 배열에서 특정항목을 제거할때 사용 (기존배열에서 삭제됨)

  ```javascript
  const number = [10, 20, 30, 40];
  const index = number.indexOf(30);
  number.splice(index, 1);
  console.log(number); // [10, 20, 40];
  ```

### 8.slice

- `slice`는 `splice`와 비슷하지만 기존 배열 건드리지 않음

  ```javascript
  const number = [10, 20, 30, 40];
  const sliced = number.slice(0, 2);
  console.log(sliced); // [10, 20]
  console.log(number); // [10, 20, 30, 40]
  ```

### 9.shift & pop

- `shift`는 배열에서 첫번째 (왼쪽부터)원소 추출 (해당 원소 삭제됨)

  ```javascript
  const number = [1, 2, 3, 4, 5];
  number.shift();
  number.shift();
  console.log(number); // [3, 4, 5]
  ```

- `pop`은 배열에서 맨 마지막부터(오른쪽부터 ) 추출 (해당 원소 삭제됨)

  ```javascript
  const number = [1, 2, 3, 4, 5];
  number.pop();
  console.log(number); // [1, 2, 3, 4]
  ```

### 10. unshift

- 배열의 맨앞에 원소를 추가
- ( unshift & shift 맨앞 원소 변형 )
  ```javascript
  const number = [10, 20, 30, 40, 50];
  number.unshift(5);
  console.log(number);
  ```

### 11. concat

- 여러개의 배열을 하나의 배열로 합쳐줌

  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const concated = arr1.concat(arr2);
  console.log(concated);
  ```

### 12.join

- `join`은 문자열 형태로 배열을 합쳐준다

```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join()); /// 1,2,3,4,5
console.log(array.join('/')); // 1/2/3/4/5
```

### 14.reduce

- `reduce` 네가지 인자

  - 누산기(accumulator)
  - 현재 값 (current)
  - 현재 인덱스(index)
  - 원본배열(src)
  - 주어진 배열의 합 구하기

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  let sum = numbers.reduce((acc, current) => acc + current, 0);
  //  합계                  accumulator(누계)  0은 초기값
  console.log(sum);
  ```

  - 주어진 배열의 평균 구하기

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  let avg = numbers.reduce((acc, current, index, array) => {
    if (index === array.length - 1) {
      // index : 처리하고 있는 항목의 순서
      return (acc + current) / array.length;
    }
    return acc + current;
  });
  console.log(avg);
  ```

- `reduce`의 다른 예

  ```javascript
  const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

  const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
      acc[current] += 1;
    } else {
      acc[current] = 1;
    }
    return acc;
  }, {});
  console.log(counts); // {a: 3, b: 1, c: 2, d: 1, e: 1}
  ```
