import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './week1.scss';
import axios from 'axios';
import contriesData from 'src/data/contries.js';
import ContentItemArea from 'src/component/contentItemArea';
import LoadingFull from 'src/component/loading/loadingFull.js';

// function ContentItemArea(data, k, func) {
//     return (
//         <div className="content-item-area">
//             {data.get(k).map(val => <div className="content-item" key={val.value}
//             onClick={() => {func(val.value)}}>{val.value}</div>)}
//         </div>
//     );
// };

function Week1() {
    let [data, setData] = useState(new Map([
            ['countries', contriesData.map(c => Object.assign(c, {value: c.country}))],
            // ['countries', []],
            ['leagues', []],
            ['teams', []],
            ['players', []]
        ]
    ));
    let [countries, setCountries] = useState(contriesData.map(c => Object.assign(c, {value: c.country})));
    let [leagues, setLeagues] = useState([]);
    let [teams, setTeams] = useState([]);
    let [players, setPlayers] = useState([]);

    let [loadingOn, setLoading] = useState(false);

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
    
    const getLeagues = async (country) => {
        setLoading(true);
        
        const res = await axios({
            method:"GET",
            url: `https://v2.api-football.com/leagues/country/${country}`,
            headers:{
                "content-type":"application/octet-stream",
                "x-rapidapi-key":"42b39433a312a5d95afb27a2ba7cee4e",
                }
            });
        // setData(data.set('leagues', res.data.api.leagues.map(v => Object.assign(v, {value: v.name}))));
        setLeagues(res.data.api.leagues.map(v => Object.assign(v, {value: v.name})));
        setTeams([]);
        setPlayers([]);
        console.log('leagues', leagues.map(l => l));
        setLoading(false);
    };
    const getTeams = async (leagueID) => {
        console.log(leagueID);
        setLoading(true);
        const res = await axios({
            method:"GET",
            url: `https://v2.api-football.com/teams/league/${leagueID}`,
            headers:{
                "content-type":"application/octet-stream",
                "x-rapidapi-key":"42b39433a312a5d95afb27a2ba7cee4e",
                }
            });
        setTeams(res.data.api.teams.map(v => Object.assign(v, {value: v.name})));
        setPlayers([]);
        console.log('teams', teams);
        setLoading(false);
    };
    const getPlayers = async (teamID) => {
        console.log(teamID);
        setLoading(true);
        const res = await axios({
            method:"GET",
            url: `https://v2.api-football.com/players/squad/${teamID}/2019`,
            headers:{
                "content-type":"application/octet-stream",
                "x-rapidapi-key":"42b39433a312a5d95afb27a2ba7cee4e",
                }
            });
        setPlayers(res.data.api.players.map(v => Object.assign(v, {value: v.player_name + ' / ' + v.position + ' / '+ v.nationality + ' / ' + v.age})));
        console.log('players', players);
        setLoading(false);
    };

    return (
        <div className="week1">
            <LoadingFull on={loadingOn} initMsg='loading'></LoadingFull>
            <div className="content-wrapper">
                <div className="title-area">
                    <div className="title">Football API</div>
                    <div className="desc">www.api-football.com</div>
                </div>
                <div className="content-area">
                    <div className={'content countries'} >
                        <div className="content-name">countries</div>
                        <div className="content-item-area">
                            {countries.map((val, i) => <div className="content-item" key={val.value + '-' + i}
                                onClick={() => {getLeagues(val.value)}}>{val.value}</div>)}
                        </div>
                    </div>
                    <div className={'content leagues'} >
                        <div className="content-name">leagues</div>
                        <div className="content-item-area">
                            {leagues.map((val, i) => <div className="content-item" key={val.value + '-' + i}
                                onClick={() => {getTeams(val.league_id)}}>{val.value + ' - ' + val.league_id}</div>)}
                        </div>
                    </div>
                    <div className={'content teams'} >
                        <div className="content-name">teams</div>
                        <div className="content-item-area">
                            {teams.map(val => <div className="content-item" key={val.value}
                                onClick={() => {getPlayers(val.team_id)}}>{val.value + ' - ' + val.team_id}</div>)}
                        </div>
                    </div>
                    <div className={'content players'} >
                        <div className="content-name">players</div>
                        <div className="content-item-area">
                            {players.map(val => <div className="content-item" key={val.value}>{val.value}</div>)}
                        </div>
                    </div>
                    {/* { [...data.keys()].map(key =>
                        <div className={'content ' + key} key={key}>
                            <div className="content-name">{key}</div>
                            <div className="content-item-area">
                                {data.get(key).map(val => <div className="content-item" key={val.value}
                                    onClick={() => {getLeagues(val.value)}}>{val.value}</div>)}
                            </div>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}

export default Week1;
