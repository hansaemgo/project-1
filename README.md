# JavaScript 입문

## 01. 변수와 상수

### 변수
___
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
___

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

  >  **`var`와`let`의 중요한 차이점은 똑같은 이름으로 여러번 선언 할 수 있느냐 없느냐 이다**<br>
  >  **`var`와`let`은 사용 범위가 다르다.`var`사용 지양**
___  

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
___
- 사칙 연산과 같은 작업을 하는 연산자
  - `+` : 덧셈
  - `-` : 뺄셈
  - `*` : 곱셈
  - `/` : 나눗셈

  ```javascript
    let a = 1 + 2;
    console.log(a); //3
    let b = 1 + 2 - (3 * 4) / 4;  // 0
   ```

산술 연출자의 일부  
  ```javascript
      let d = 1
      d++; // 특정 변수에 1을 바로 더해줌 (더하기 직전 값 보여줌)
      ++d; // 특정 변수에 1을 바로 더해줌 (더한다음의 갑승ㄹ 보여준다)
     console.log(d) 
   ```

#### 대입 연산자 
___
특정 값에 연산을 한 값을 바로 설정할 때 사용할 수 있는 연산자 

 ```javascript
  let a = 1;
  a += 3;
```

### 논리 연산자 
___
보통 불리언타입을 위한 연산자(true 혹은 false) **if 문을 배울때 유용**
  - `!`  : MOT
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
  const a = true && true ;
  console.log(a); // ture
  let f = false && false ;
  console.log(f);  // false
```  

#### OR
---
- OR 연산자는 양쪽의 값 중 하나라도 true 라면 결과물이 true 입니다
```javascript
let t = true || false
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
비교연산자는 두 값을 비교할 때 사용
---

#### 두 값이 일치하는지 확인
---
```javascript
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals); // true
```
  > **`===`는 두 값이 일치하는지 확인해준다 일치하면 true 일치하지 않으면 false**<br/>
  > **`==`는 두 값이 일치하는지 확인해주지만 타입 비교 하지 않는다.**

