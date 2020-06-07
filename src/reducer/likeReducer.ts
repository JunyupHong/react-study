const likeReducer = (state: Array<{ playerId: string }> = [], action: { type: 'add' | 'remove', playerId: string }) => {
    switch (action.type) {
        case 'add':
            return state.concat([{ playerId: action.playerId }]);
        case 'remove':
            return state.filter(s => s.playerId !== action.playerId);
        default:
            return state;
    }

}

export default likeReducer;
