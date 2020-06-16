import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const headers = {
    "content-type":"application/octet-stream",
    "x-rapidapi-key":"42b39433a312a5d95afb27a2ba7cee4e",
};

export default function* getCountries() {
    yield fetchCountries();
}

function* fetchCountries() {
    try {
        const res = yield call(api.getCountries);
        yield put({ type: 'FETCH_COUNTRIES_SUCCESS', payload: res.data.api.countries });
    } catch(e) {
        yield put({ type: 'FETCH_COUNTRIES_FAILURE', payload: [] });
    }
}
const api = {
    getCountries: () => {
        return axios({
            method: "GET",
            url:"https://v2.api-football.com/countries",
            headers
        });
    }
}
