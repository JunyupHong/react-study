import React, { useState, useEffect, useLayoutEffect } from 'react';
import './week1.scss';
import axios from 'axios';
import contriesData from 'src/data/contries.js';


function Week1() {
    let [data, setData] = useState(new Map([
            ['countries', contriesData.map(c => Object.assign(c, {value: c.country}))],
            // ['countries', []],
            ['leagues', []],
            ['teams', []],
            ['players', []]
        ]
    ));

    // useEffect(() => {
    //     (async () => {
    //         const res = await getCountries();
    //         setData(data.set('countries', res.data.api.countries.map(v => Object.assign(v, {value: v.country}))));
    //     })();
    // }, []);
    // const getCountries = async() => {
    //     const res = await axios({
    //         method:"GET",
    //         url:"https://v2.api-football.com/countries",
    //         headers:{
    //             "content-type":"application/octet-stream",
    //             "x-rapidapi-key":"42b39433a312a5d95afb27a2ba7cee4e",
    //             }
    //         });
    //     console.log(res);
    //     setData({ countries: res.data.api.countries });
    //     console.log('1', data);
    // };
    
    const clickCountry = async (country) => {
        console.log(country);
        console.log(data.get('leagues'));

        
        const res = await axios({
            method:"GET",
            url: `https://v2.api-football.com/leagues/country/${country}`,
            headers:{
                "content-type":"application/octet-stream",
                "x-rapidapi-key":"42b39433a312a5d95afb27a2ba7cee4e",
                }
            });
        setData(data.set('leagues', res.data.api.leagues.map(v => Object.assign(v, {value: v.name}))));
        console.log('1', data);
    };
    useEffect(() => {
        console.log(data);
        // document.contentItemArea.child({data.get(key).map(val => <div className="content-item" key={val.value}
        // onClick={() => {clickCountry(val.value)}}>{val.value}</div>)});
    }, [data]);

    return (
        <div className="week1">
            <div className="content-wrapper">
                <div className="title-area">
                    <div className="title">Football API</div>
                    <div className="desc">www.api-football.com</div>
                </div>
                {/* <div className="start-button" onClick={getCountries}>start</div> */}
                <div className="content-area">
                    { [...data.keys()].map(key =>
                        <div className={'content ' + key} key={key}>
                            <div className="content-name">{key}</div>
                            <div className="content-item-area">
                                {data.get(key).map(val => <div className="content-item" key={val.value}
                                    onClick={() => {clickCountry(val.value)}}>{val.value}</div>)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Week1;
