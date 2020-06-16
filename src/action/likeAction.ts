import {PlayerData} from '../type';
const add = (playerData: PlayerData) => {
    return { type: 'add', playerData };
};
const remove = (playerData: PlayerData) => {
    return { type: 'remove', playerData };
}

export default {
    add,
    remove
}