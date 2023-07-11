## JavaScript

---

#### 논리연산자

|| : or
&& : and
! : not

---

#### button

- name(중복 가능) or id(고유)
- type : submit(기본값), reset, button(버튼일때 지정)
- value

```
<button name="button">버튼입니다</button>
```

---

##### EVENT 방법

1. html+js

html

```
<div class='my-div' onclick='hello()'>
```

js

```
function hello() {
    alert('안녕하세요');
    }
```

2. js만

```
window.onload = function () {
var el = document.getElementById("my-div");
el.onclick = hello;
}

function hello()  {
    alert('안녕하세요');
    }
```

---

#### 조건문

1. if문

```
if (표현식) {;}
else if(){;}
else{;}
```

2. switch

```
switch (조건 값) {
    case 값1:
    실행문;
    break;

    case 값2:
    실행문;
    break;

    default:
    조건 값이 어떠한 case 절에도 해당하지 않을 때 실행하고자 하는 실행문;
    break;
    }
```

---

#### 반복문

1. do/while

```
do {실행문;}
while (표현식);
```

2. for

```
for (초기식; 표현식; 증감식) {실행문;}
```

---
