const add = (playerId: string) => {
    return { type: 'add', playerId };
};
const remove = (playerId: string) => {
    return { type: 'remove', playerId };
}

export default {
    add,
    remove
}