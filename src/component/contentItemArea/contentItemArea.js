import React, { useMemo } from 'react';
import './contentItemArea.scss';

function ContentItemArea(props) {
    console.log('render', props.title);
    const clickFunc = (val) => {
        if (props.title === 'leagues') props.clickEvent(val.league_id);
        else if (props.title === 'teams') props.clickEvent(val.team_id);
        else props.clickEvent(val.value);
    };

    const element = useMemo(() => {
        if (props.items.length === 0) return <div>1</div>;
        return props.items.map((val, i) => <div className="content-item" key={props.title + '-' + i}
                        onClick={() => { clickFunc(val) }}>{val.value}</div>);
    }, [props.items]);
    
    return (
        <div className={'content ' + props.title}>
            <div className="content-item">
                <div className="content-name">{props.title}</div>
                    <div className="content-item-area">
                        {element}
                        {/* {props.items.map((val, i) => <div className="content-item" key={props.title + '-' + i}
                        // onClick={() => {
                        //     if (props.title === 'leagues') props.clickEvent(val.league_id);
                        //     else if (props.title === 'teams') props.clickEvent(val.team_id);
                        //     else props.clickEvent(val.value);
                        // }}>{val.value}</div>)}
                        onClick={() => { clickFunc(val) }}>{val.value}</div>)} */}
                    </div>
            </div>
        </div>
    );

};
export default React.memo(ContentItemArea);