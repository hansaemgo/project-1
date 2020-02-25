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

- 상수는 값이 고정적, 한번 선언하고 값이 바뀌니 않는다.

  ```javascript
  const a = 1;
  ```

- 상수를 선언할 때도 마찬가지로 한번 선언 후 같은 이름으로 선언 불가능

  ```javascript
  const a = 1;
  const a = 2;
  ```

  ![constant error](/src/image/constant_error.jpg)

** `var` 와 `let`의 중요한 차이점으로 똑같은 이름으로 여러번 선언 할 수 있느냐 없느냐 이다**
** `var` 와 `let`은 사용 범위가 다르다. `var` 사용 지양 **

### 데이터 타입

---

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
const friend = null; // 친구가 없다
let criminal;
console.log(criminal); // 범인이 아직 정해지지 않았다
```
