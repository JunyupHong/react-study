import React from 'react';
import './like.scss';

import { useSelector } from 'react-redux';

function Like(): JSX.Element {
    const like = useSelector((state: {like: Array<{playerData: {player_id: string}}>}) => state.like);
    
    return <div className="like-content">{
        like.map((l, i) => {
            return <div key={l.playerData.player_id + '-' + i}>{
                Object.entries(l.playerData).map((([k, v], i) => {
                    return <div key={k + '-' + i}>key: {k} / value: {v}</div>;
                }))
            }<br/><br/></div>;
        })
        }</div>;
}

export default Like;