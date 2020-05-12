import React , { useState, useEffect }from 'react';
import './loadingFull.scss';
import loading from 'src/asset/loading.gif';

export default function LoadingFull(props) {
    let [message, setMessage] = useState(props.initMsg);
    let [on, setOn] = useState(props.on);
    useEffect(() => {
        let tick = 0;
        setInterval(() => {
            tick++;
            let msg = props.initMsg;
            for (let i = 0; i <= tick % 3; i++) {
                msg += '.';
            }
            setMessage(msg);
         }, 600);
    }, []);
    // 이렇게 ㅆ는게 아닌가?
    useEffect(() => {
       setOn(props.on);
       console.log(props.on);
    }, [props.on]);
    
    return (
        <div className="loading-full" on={on.toString()}>
            <div className="loading-progress">
                <img src={loading} className="loading-icon" alt="loading-icon" />
            </div>
            <div className="message">{message}</div>
        </div>
    );
    
};