import React, { useEffect } from 'react';
import './contentItemArea.scss';

export default function ContentItemArea(props) {
    return (
        <div className={'content ' + props.title}>
            <div className="content-item">
                <div className="content-name">{props.title}</div>
                    <div className="content-item-area">
                        {props.items.map((val, i) => <div className="content-item" key={val.value + '-' + i}
                        onClick={() => {
                            if (props.title === 'leagues') props.clickEvent(val.league_id);
                            else if (props.title === 'teams') props.clickEvent(val.team_id);
                            else props.clickEvent(val.value);
                        }}>{val.value}</div>)}
                    </div>
            </div>
        </div>
    );
    
};
