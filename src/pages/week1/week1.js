import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import './week1.scss';
import axios from 'axios';
import contriesData from 'src/data/contries.js';
import ContentItemArea from 'src/component/contentItemArea/contentItemArea';
import LoadingFull from 'src/component/loading/loadingFull.js';

function Week1() {

    const headers = {
        "content-type":"application/octet-stream",
        "x-rapidapi-key":"42b39433a312a5d95afb27a2ba7cee4e",
    };
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
            headers
            });
        // setData(data.set('leagues', res.data.api.leagues.map(v => Object.assign(v, {value: v.name}))));
        setLeagues(res.data.api.leagues.map(v => Object.assign(v, {value: v.name})));
        setTeams([]);
        setPlayers([]);
        console.log('get leagues', leagues.map(l => l));
        setLoading(false);
    };
    const getTeams = async (leagueID) => {
        console.log(leagueID);
        setLoading(true);
        const res = await axios({
            method:"GET",
            url: `https://v2.api-football.com/teams/league/${leagueID}`,
            headers
            });
        setTeams(res.data.api.teams.map(v => Object.assign(v, {value: v.name})));
        setPlayers([]);
        console.log('get teams', teams);
        setLoading(false);
    };
    const getPlayers = async (teamID) => {
        console.log(teamID);
        setLoading(true);
        const res = await axios({
            method:"GET",
            url: `https://v2.api-football.com/players/squad/${teamID}/2019`,
            headers
            });
        setPlayers(res.data.api.players.map(v => Object.assign(v, {value: v.player_name + ' / ' + v.position + ' / '+ v.nationality + ' / ' + v.age})));
        console.log('get players', players);
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
                    <ContentItemArea title='countries' items={countries} clickEvent={getLeagues}></ContentItemArea>
                    <ContentItemArea title='leagues' items={leagues} clickEvent={getTeams}></ContentItemArea>
                    <ContentItemArea title='teams' items={teams} clickEvent={getPlayers}></ContentItemArea>
                    <ContentItemArea title='players' items={players} clickEvent={() => {console.log(players)}}></ContentItemArea>
                </div>
            </div>
        </div>
    );
}

export default Week1;
