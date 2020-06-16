
export type fetchCountiresType = 'FETCH_COUNTRIES_REQUEST' | 'FETCH_COUNTRIES_SUCCESS' | 'FETCH_COUNTRIES_FAILURE';

const fetchCountriesRequest = (countries: any): { type: fetchCountiresType, countries: any } => {
    return { type: 'FETCH_COUNTRIES_REQUEST', countries };
};
const fetchCountriesSuccess = (countries: any): { type: fetchCountiresType, countries: any } => {
    return { type: 'FETCH_COUNTRIES_SUCCESS', countries };
};
const fetchCountriesFailure = (countries: any): { type: fetchCountiresType, countries: any } => {
    return { type: 'FETCH_COUNTRIES_FAILURE', countries };
};


const asyncSetLeagues = (leagues: any) => {
    return { type: 'SET_LEAGUES', leagues };
}
const asyncSetTeams = (teams: any) => {
    return { type: 'SET_TEAMS', teams };
}
const asyncSetPlayers = (players: any) => {
    return { type: 'SET_PLAYERS', players };
}

export default {
    fetchCountriesRequest,
    fetchCountriesSuccess,
    fetchCountriesFailure,
    asyncSetLeagues,
    asyncSetTeams,
    asyncSetPlayers,
};