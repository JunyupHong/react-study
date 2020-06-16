
const countriesReducer = (state: any[] = [], action: { type: 'FETCH_COUNTRIES_SUCCESS' | 'FETCH_COUNTRIES_FAILURE', payload: any }) => {
    switch (action.type) {
        case 'FETCH_COUNTRIES_SUCCESS':
            return state.concat([...action.payload]);
        case 'FETCH_COUNTRIES_FAILURE':
            return state;
        default:
            return state;
    }
}

export default countriesReducer;
