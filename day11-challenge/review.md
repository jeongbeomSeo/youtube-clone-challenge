# Review

## For in vs For of

[자바스크립트 for in vs for of 반복문 정리 - JavaScript - 자바스크립트 개발자 포럼](https://jsdev.kr/t/for-in-vs-for-of/2938)

## incldue

배열에 원하는 요소가 있는지 check하거나 string에서 원하는 문자열이 있는지 확인해주는 함수.

[Array.prototype.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
[String.prototype.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

## textarea tag

textarea tag를 사용할 때 linebreak에 주의하자.

[참고: HTML textarea , select 태그](https://velog.io/@hyo123/HTML-textarea-select-%ED%83%9C%EA%B7%B8)

## Object key

Javascript에서 Object를 만들 때, key이름과 value에 넣어줄 변수명이 같다면 다음과 같이 하면 된다.

```js
const movie = {
  title,
  synopsis,
  genres,
};
```

## 오류 해결

오류는 다음과 같다.

![day11 오류](./day11-오류.png)

Add Page로 가고나서 부터 오류가 나기 시작했는데, 그 이후부턴 home page, detail page로 가도 똑같은 오류가 아는 것을 확인했다.

title이 undefined되어 있다고 나오는데도 불구하고 console.log()로 확인해 보면 재대로 담겨 있음을 확인했다.

이 문제는 다음과 같이 해결했다.

router.js

```js
import express from "express";
import { home, movieDetail, getAdd, postAdd } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/:id", movieDetail);
movieRouter.route("/add").get(getAdd).post(postAdd);

export default movieRouter;
```

여기서 보면, **:id**가 변수로서 활용되고 있는데, 정규식을 사용하지 않아서 모든 문자를 전부 변수 취급해버리고 있다.

그래서, Add Page로 갔을 때 콜백된 함수가 getAdd나 postAdd가 아닌 movieDetail이였던 것이다.

그래서 movieDetail Controller는 url에서 숫자로된 :id를 받아야 영화를 꺼내서 올바르게 렌더링할 수 있는데 그것이 안되니 오류가 계속해서 발생하고, 출력은 되는 상황이 발생한 것이다.

이것은 movieDetail안에 console.log를 넣어놓고 Add Page로 가니깐 movieDetail controller의 console.log(movie)가 출력이 되었고, 출력은 undefined로 되어있다.
