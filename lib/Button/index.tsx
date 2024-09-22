import React from 'react';
import {useState} from 'react';

export default (props:{
    msg?:string
}) => {
    const {msg} = props;
    const [count,setCount] = useState(0);
    const handerClick = () => {
        setCount(count+1);
        // console.log(msg);
        alert(msg)
    }

    return (
        <button onClick={handerClick}>
            count is {count}
        </button>
    );
}
