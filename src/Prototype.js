/*
컴포넌트로 만들어진 함수는 다른데서 재사용이 가능하다. 
리액트는 컴포넌트의 위치를 상관X
정의를 내리고, 사용할 수 있으면 됨.
*/


function Greet(){
    return (
    <p>안녕하세요!</p>
    );
}


function Foods(){
    return(
        <ul>
            <li>피자</li>
            <li>라면</li>
            <li>치킨</li>
        </ul>
    );
}

function Animals (props) {
    return(
    <p>
        <hi>고양이와{props.name}</hi>
    </p>
    );
}

function Prototype() {


    return (
        <div>
            <Animals name = "강아지" />
        </div>
    );

}
export default Prototype;