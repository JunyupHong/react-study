import React, { useState, useEffect } from 'react';
import './detailView.scss';

import { StarOutlined, StarFilled } from '@ant-design/icons';


import { useSelector, useDispatch } from 'react-redux';
import action from '../../action';

import {PlayerData} from '../../type';

export default function DetailView(props: {playerData: PlayerData, show: boolean, closeFunc: () => void}): JSX.Element {
    let [display, setDisplay] = useState<boolean>(props.show);
    
    const dispatch = useDispatch();
    const like = useSelector((state: {like: Array<{playerData: {player_id: string}}>}) => state.like).filter(ele => ele.playerData.player_id + '' === props.playerData.player_id + '');
    
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
                                onClick={() => {dispatch(action.Like.add(props.playerData))}}/>
                            <StarFilled style={{display: like.length !== 0 ? 'block': 'none' }}
                                onClick={() => {dispatch(action.Like.remove(props.playerData))}}/>
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
