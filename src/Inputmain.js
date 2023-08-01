
import { useState } from "react";


// 컴포넌트 
function Inputmain(){

    const [text, setText] = useState("");
    const handleChage =(event) => {
        // 변환될 값
        setText(event.target.value);
    }
    const handleReset = () => {
        setText("");
    }
    return(
        <div>
            <input onChange={handleChage} value = {text} />
            <button onClick={handleReset}> 초기화 </button>
            <div>
                <b>값 : {text} </b>
            </div>
        </div>

    );
}
export default Inputmain;