const likeReducer = (state: Array<{ playerData: {player_id: string} }> = [], action: { type: 'add' | 'remove', playerData: {player_id: string} }) => {
    switch (action.type) {
        case 'add':
            return state.concat([{ playerData: action.playerData }]);
        case 'remove':
            return state.filter(s => s.playerData.player_id !== action.playerData.player_id);
        default:
            return state;
    }

}

export default likeReducer;
