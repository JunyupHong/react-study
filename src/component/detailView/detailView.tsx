import React, { useState, useEffect } from 'react';
import './detailView.scss';

import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';


import { useSelector, useDispatch } from 'react-redux';
import action from '../../action';


interface PlayerData {
    player_id: number;
    firstname: string;
    lastname: string;
    player_name: string;
    age: number;
    nationality: string;
    birth_country: string;
    birth_data: string;

    position: string;
    weight: string;
    height: string;
    number: null | number;
}

export default function DetailView(props: {playerData: PlayerData, show: boolean, closeFunc: () => void}): JSX.Element {
    let [display, setDisplay] = useState<boolean>(props.show);
    
    const dispatch = useDispatch();    
    const like = useSelector((state: {like: Array<{playerId: string}>}) => state.like).filter(ele => ele.playerId === props.playerData.player_id + '');
    
    useEffect(() => {
        props.show ? setDisplay(true) : setDisplay(false);
    }, [props.show]);


    return <div className="detail-view" style={{display: display ? 'flex' : 'none'}} onClick={props.closeFunc}>
                <div className="detail-content-area" onClick={(event) => {event.stopPropagation();}}>
                    <div className="title-area">
                        <div className="title">{props.playerData.player_name}</div>
                        <div className="id">&nbsp;&nbsp;&nbsp; ( {props.playerData.player_id} )</div>
                        <div style={{'flex': 1}}></div>
                        <div className="star">
                            <StarOutlined style={{display: like.length !== 0 ? 'none': 'block' }}
                                onClick={() => {dispatch(action.Like.add(props.playerData.player_id + ''))}}/>
                            <StarFilled style={{display: like.length !== 0 ? 'block': 'none' }}
                                onClick={() => {dispatch(action.Like.remove(props.playerData.player_id + ''))}}/>
                            </div>
                    </div>
                    <div className="desc-area">
                        {Object.entries(props.playerData).map(([k, v]) => {
                            return <div className="desc-item" key={k + '-' + v}>
                                    <div className="key">{k}: </div>
                                    <div className="value">{v}</div>
                                </div>;
                        })}
                    </div>
                </div>
            </div>;
}
