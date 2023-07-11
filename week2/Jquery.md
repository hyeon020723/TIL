## Jquery

---

#### import

1. CDN 이용

```
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
```

2. 다운받아 연결

```
<script src="jquery-3.5.1.min.js"></script>
```

---

```
$(선택자).함수();
```

선택자

"\*", ".class", "element", "#id"

"div:first-child", "div:nth-child(2)"

"ul > li"

"[name|=apple]"

함수

.after() : 해당 요소 뒤에 내용 추가
.before()
.html()
.append() : 선택 대상 자식 객체 마지막에 html 삽입
.wrap() : 선택 요소의 부모요소 생성
.remove()
.empty()
.on()
.ready()
.load()

.click()
.mousemove()
.hover()

---

ex)

```
$('#해당 id 값').val();
```

```
$('#해당 id 값').show();
```

```
$('해당 id 값').hide();
```

```
$('#해당 id 값').text('바꿀값');
```

```
$('#btn-posting-box').text('박스 닫기');
```

---
