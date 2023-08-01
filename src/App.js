import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  /*
  script 작성
  css, javascript 활동을 적는다
  변수 선언, 상태 변경은 여기에 진행
  기능 작동하는 곳

  useState 사용하기 위해
  : 상태값 관리자 초기값 세팅, 값 변환이 가능
  import { useState } from 'react';를 임포트 해준다


  const [useState(0), 반환될 값] = 초기값;
  state
    - 컴포넌트 내부에서 선언한 값
    - setState를 통해서 내부 값을 변경할 수 있다.
  */

  var name = "javascript";
  console.log(name);

  var name = "react";
  console.log(name);

  let name1 = "hello";
  console.log(name1);

  name1 = "world";
  console.log(name1);
  /* let은 선언을 한 번 더 못하게 함 */

  /* const는 선언은 무조건 한 번만 함 */

  const name2 = "vue";
  console.log(name2);


  // let count = 0;
  

  const [number, setNumber] = useState(100);

  // 값이 증가하는 자바스크립트
  const plus = () => {
    //count = count + 1; 얘는 콘솔창에 뜸

    setNumber(number+1);
    console.log(number);

  }

  // 값이 감소하는 자바스크립트
  const minus = () => {
    // count -= 1;

    setNumber(number-1);
    console.log(number)
  }

  return (

  /* 
  html만 적는다
  보이는 것 하는 곳
  */

    <div className="App">
    {/* 
    <div className = "App">은 <html> 태그와 비슷한 역할을 한다.
    리액트에서는 onClick={}으로 표기 js에서는 onClick = "이름?"

    위에서 변수 선언한 값을 가져오기 위해서는 {} 사용해서 변수값 기입

    */}

    <h2> {number} </h2>
    <button onClick={plus} > + </button>
    <button onClick={minus}> - </button> 



    </div>
  );
}

export default App;
