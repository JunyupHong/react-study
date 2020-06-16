import {PlayerData} from '../type';
const likeReducer = (state: Array<{ playerData: PlayerData }> = [], action: { type: 'add' | 'remove', playerData: PlayerData }) => {
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
