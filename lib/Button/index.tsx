import React from 'react';
import {useState} from 'react';
import './index.css';

export default (props:{
    msg?:string
}) => {
    const {msg} = props;
    const [count,setCount] = useState(5);
    const handerClick = () => {
        setCount(count+1);
        console.log(msg);
    }
    return (
        <button className="gr-button" onClick={handerClick}>
        {/* <button onClick={handerClick}> */}
                count is {count}
        </button>
    );
}
